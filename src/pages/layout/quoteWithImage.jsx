import React, { useEffect, useRef, useState } from "react";

import AcaWhite from "../../components/svg/acaWhite";
import ColouredBar from "../../components/svg/colouredBar";
import htmlToImage from "html-to-image";
import slugify from "react-slugify";

export default () => {
  const [quoteText, setQuoteText] = useState(null);
  const [position, setPosition] = useState(null);
  const [name, setName] = useState(null);
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
      <div className="grid grid-cols-12 col-gap-2">
        <div className="col-span-12 sm:col-span-9 flex justify-center">
          <div
            style={{ width: "600px", height: "600px" }}
            className="grid grid-cols-12 col-gap-2 bg-orange relative"
            ref={sharepicRef}
          >
            <div className="col-span-8 col-start-3 text-center flex items-end justify-center text-white">
              <div>
                <span
                  dangerouslySetInnerHTML={{ __html: quoteText }}
                  className="block"
                  style={{ whiteSpace: "pre-line" }}
                  className={`${(name !== "" || position !== "") && "mb-6"} block`}
                />
                <div>
                  <span dangerouslySetInnerHTML={{ __html: name }} />
                  <span
                    dangerouslySetInnerHTML={{ __html: position }}
                    className={`${name !== "" && "ml-4"}`}
                  />
                </div>
              </div>
            </div>
            <div
              className="col-span-12 flex justify-center"
              style={{ height: "4rem" }}
            >
              <AcaWhite width="200" className="absolute bottom-0" />
            </div>
            <ColouredBar width="600" className="absolute bottom-0" />
          </div>
        </div>
        <div className="col-span-12 sm:col-span-3">
          <label htmlFor="quoteText" className="block">
            Zitattext
          </label>
          <textarea
            id="quoteText"
            onChange={(e) => setQuoteText(e.target.value)}
            className="border-2 border-black"
          />
          <label htmlFor="name" className="block">
            Name
          </label>
          <input
            id="name"
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-black"
          />
          <label htmlFor="position" className="block">
            Position
          </label>
          <input
            id="position"
            onChange={(e) => setPosition(e.target.value)}
            className="border-2 border-black"
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
