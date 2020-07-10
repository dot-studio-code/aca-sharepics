import React, { useEffect, useRef, useState } from "react";

import AcaColored from "../../components/svg/acaColored";
import ColouredBar from "../../components/svg/colouredBar";
import Draggable from "react-draggable";
import { Link } from "gatsby";
import htmlToImage from "html-to-image";
import slugify from "react-slugify";

export default () => {
  const [image, setImage] = useState(null);
  const [airline, setAirline] = useState("Airline");
  const [news, setNews] = useState("News");
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const sharepicRef = useRef(null);

  const html2image = () => {
    htmlToImage
      .toJpeg(sharepicRef.current, { quality: 1 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = `sharepic-${slugify(news)}.jpg`;
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
            className="grid grid-cols-8 col-gap-2 relative bg-white"
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
              />
            </Draggable>
            {image !== null && (
              <img
                src={image}
                className="absolute top-0 left-0 z-10"
                style={{
                  width: "100%",
                  maxHeight: "50%",
                  objectFit: "cover",
                  top: `${imagePosition.y}px`,
                  left: `${imagePosition.x}px`,
                }}
              />
            )}
            <div
              className="bg-black absolute z-20 w-full"
              style={{
                height: "50%",
                backgroundColor: "rgba(51, 51, 51, 0.25)",
                mixBlendMode: "multiply",
              }}
            ></div>
            <div className="col-span-8 flex justify-center z-20">
              <span
                dangerouslySetInnerHTML={{ __html: airline }}
                className="mt-2 font-bold italic text-white text-md"
              />
            </div>
            <div className="col-span-6 w-full col-start-2 text-center flex items-center justify-center pb-24 text-black z-30">
              <div>
                <span
                  dangerouslySetInnerHTML={{ __html: news }}
                  style={{ whiteSpace: "pre-line" }}
                  className="block italic font-bold text-2xl leading-none"
                />
              </div>
            </div>
            <div
              className="col-span-12 flex justify-center absolute bottom-0 left-0 w-full"
              style={{ height: "4rem" }}
            >
              <AcaColored
                width="200"
                className="absolute bottom-0 z-30 mb-12"
              />
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

          <label htmlFor="airline" className="block">
            Airline
          </label>
          <input
            id="airline"
            defaultValue={airline}
            onChange={(e) => setAirline(e.target.value)}
            className="border-2 border-black"
          />
          <label htmlFor="news" className="block">
            News
          </label>
          <textarea
            id="news"
            rows={4}
            cols={30}
            defaultValue={news}
            onChange={(e) => setNews(e.target.value)}
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
