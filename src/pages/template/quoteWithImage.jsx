import React, { useRef, useState } from "react";

import AcaWhite from "../../components/svg/acaWhite";
import ColouredBar from "../../components/svg/colouredBar";
import Draggable from "react-draggable";
import { Link } from "gatsby";
import { formatEmojis } from "../../components/lib/lib";
import * as htmlToImage from "html-to-image";
import slugify from "react-slugify";

const News = () => {
  const [image, setImage] = useState(null);
  const [imageScale, setImageScale] = useState(0);
  const [textScale, setTextScale] = useState(100);
  const [quoteText, setQuoteText] = useState("Hier kommt der Zitattext rein.");
  const [name, setName] = useState("Name der Person");
  const [position, setPosition] = useState("Position");
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const sharepicRef = useRef(null);
  const draggableRef = useRef(null);

  const html2image = () => {
    htmlToImage
      .toJpeg(sharepicRef.current, { quality: 1, width: 600, height: 600 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = `sharepic-${slugify(quoteText)}.jpg`;
        link.href = dataUrl;
        link.click();
      });
  };

  return (
    <div className="container p-5">
      <Link to="/" className="block text-center text-md">← zurück zur Auswahl</Link>
      <div className="grid grid-cols-12 gap-x-2 py-2">
        <div className="col-span-12 sm:col-span-9 flex justify-center">
          <br />
          <div
            style={{
              width: "600px",
              height: "600px",
            }}
            className="grid grid-cols-8 gap-x-2 relative"
            ref={sharepicRef}
          >
            <Draggable
              onDrag={(e, data) => {
                setImagePosition({ x: data.x, y: data.y });
              }}
              onStop={(e, data) => {
                draggableRef.current.style.transform = "translate(0px, 0px)";
              }}
            >
              <div
                className="absolute top-0 left-0 w-full h-full z-50 cursor-pointer"
                ref={draggableRef}
                draggable
              />
            </Draggable>

            <div
              className="absolute top-0 left-0 z-10 w-full"
              style={{
                backgroundImage: `url(${
                  image !== null ? image : "/assets/images/susana.jpg"
                })`,
                height: "100%",
                backgroundPositionX: `${imagePosition.x}px`,
                backgroundPositionY: `${imagePosition.y}px`,
                backgroundSize: `${imageScale * 10 + 100}%`,
              }}
            />
            <div
              className="absolute top-0 left-0 w-full h-full z-20"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #fff 50%, #000000 110%)",
                mixBlendMode: "multiply",
              }}
            />

            <div className="col-span-6 w-full col-start-2 text-center flex items-end justify-center pb-24 text-white z-30">
              <div>
                <span
                  dangerouslySetInnerHTML={{
                    __html: formatEmojis(quoteText),
                  }}
                  style={{
                    whiteSpace: "pre-line",
                    fontSize: `${(parseInt(textScale) / 100) * 2.7}rem`,
                  }}
                  className={`${
                    (name !== "" || position !== "") && "mb-4"
                  } block italic font-bold leading-none`}
                />
                <div>
                  <span
                    dangerouslySetInnerHTML={{ __html: name }}
                    className="font-bold"
                  />
                  <span
                    dangerouslySetInnerHTML={{ __html: position }}
                    style={{
                      whiteSpace: "pre-line",
                    }}
                    className={`${name !== "" && "ml-4"}`}
                  />
                </div>
              </div>
            </div>
            <div
              className="col-span-8 flex justify-center absolute bottom-0 left-0 w-full"
              style={{ height: "4rem" }}
            >
              <AcaWhite width="200" className="absolute bottom-0 z-30" />
            </div>
            <ColouredBar width="600" className="absolute bottom-0 z-30" />
          </div>
        </div>
        <div className="col-span-12 sm:col-span-3">
          <label htmlFor="file">Bild auswählen</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={(e) =>
              e.target.files[0] !== null &&
              setImage(URL.createObjectURL(e.target.files[0]))
            }
          />
          <button
            className="block border-2 border-black p-1 mt-2"
            onClick={() => setImagePosition({ x: 0, y: 0 })}
          >
            Reset Bildausschnitt
          </button>
          <label htmlFor="imageScale" className="block">
            Zoomfaktor für Bild
          </label>
          <input
            type="range"
            id="imageScale"
            name="imageScale"
            min="0"
            defaultValue={imageScale}
            max="30"
            onChange={(e) => setImageScale(e.target.value)}
          />

          <label htmlFor="quoteText" className="block">
            Zitattext
          </label>
          <textarea
            id="quoteText"
            rows={4}
            cols={30}
            defaultValue={quoteText}
            onChange={(e) => setQuoteText(e.target.value)}
            className="border-2 border-black"
          />
          <label htmlFor="textScale" className="block">
            Zoomfaktor für Text
          </label>
          <input
            type="range"
            id="textScale"
            name="textScale"
            min="80"
            defaultValue={textScale}
            max="140"
            onChange={(e) => setTextScale(e.target.value)}
          />
          <label htmlFor="name" className="block">
            Name
          </label>
          <input
            id="name"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-black"
          />
          <label htmlFor="position" className="block">
            Position
          </label>
          <textarea
            id="position"
            defaultValue={position}
            onChange={(e) => setPosition(e.target.value)}
            className="border-2 border-black"
            rows={2}
            cols={30}
          />
          <button
            className="block border-2 border-black p-1 mt-2"
            onClick={() => html2image()}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;