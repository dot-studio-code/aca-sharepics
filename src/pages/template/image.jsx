import React, { useEffect, useRef, useState } from "react";

import AcaWhite from "../../components/svg/acaWhite";
import ColouredBar from "../../components/svg/colouredBar";
import Draggable from "react-draggable";
import { Link } from "gatsby";
import htmlToImage from "html-to-image";
import slugify from "react-slugify";

export default () => {
  const [image, setImage] = useState(null);
  const [quoteText, setQuoteText] = useState("Hier kommt der Zitattext rein.");
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const sharepicRef = useRef(null);

  const html2image = () => {
    htmlToImage
      .toJpeg(sharepicRef.current, { quality: 1 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = `sharepic-${slugify(quoteText)}.jpg`;
        link.href = dataUrl;
        link.click();
      });
  };

  return (
    <div className="container p-5">
      <Link to="/">zurück zur Auswahl</Link>
      <div className="grid grid-cols-12 col-gap-2">
        <div className="col-span-12 sm:col-span-9 flex justify-center">
          <br />
          <div
            style={{
              width: "600px",
              height: "600px",
            }}
            className="grid grid-cols-8 col-gap-2 relative"
            ref={sharepicRef}
          >
            <Draggable
              onStart={(e, data) => {
                setImagePosition({ x: data.x, y: data.y });
              }}
              onDrag={(e, data) => {
                setImagePosition({ x: data.x, y: data.y });
              }}
              onStop={(e, data) => {
                setImagePosition({ x: data.x, y: data.y });
              }}
            >
              <div
                className="absolute top-0 left-0 w-full h-full z-50"
                draggable
              ></div>
            </Draggable>
            {image !== null && (
              <img
                src={image}
                className="absolute top-0 left-0 z-10"
                style={{
                  height: "100%",
                  top: `${imagePosition.y}px`,
                  left: `${imagePosition.x}px`,
                }}
              />
            )}
            <div
              className="absolute top-0 left-0 w-full h-full z-20"
              style={{
                backgroundColor:
                  "rgba(0, 0, 0, 0.35)",
                mixBlendMode: "multiply",
              }}
            />

            <div className="col-span-6 w-full col-start-2 text-center flex items-center justify-center text-white z-30">
              <div>
                <span
                  dangerouslySetInnerHTML={{ __html: quoteText }}
                  style={{ whiteSpace: "pre-line" }}
                  className="block italic font-bold text-2xl leading-none"
                />
              </div>
            </div>
            <div
              className="col-span-12 flex justify-center absolute bottom-0 left-0 w-full"
              style={{ height: "4rem" }}
            >
              <AcaWhite width="200" className="absolute bottom-0 z-30" />
            </div>
            <ColouredBar width="600" className="absolute bottom-0 z-30" />
          </div>
        </div>
        <div className="col-span-12 sm:col-span-3">
          <input
            type="file"
            onChange={(e) =>
              e.target.files[0] !== null &&
              setImage(URL.createObjectURL(e.target.files[0]))
            }
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
          
          <button
            className="block border-2 border-black p-1 mt-2"
            onClick={() => html2image()}
          >
            Download
          </button>
          <button onClick={() => setImagePosition({ x: 0, y: 0 })}>
            reset
          </button>
        </div>
      </div>
    </div>
  );
};
