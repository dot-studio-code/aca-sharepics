import React, { useRef, useState } from "react";

import AcaWhite from "../../components/svg/acaWhite";
import ColouredBar from "../../components/svg/colouredBar";
import { Link } from "gatsby";
import QuoteIcon from "../../components/svg/quote";
import { colors } from "../../config/vars";
import htmlToImage from "html-to-image";
import slugify from "react-slugify";

export default () => {
  const [quoteText, setQuoteText] = useState("Hier kommt der Zitattext rein.");
  const [name, setName] = useState("Name der Person");
  const [position, setPosition] = useState("Position");
  const [backgroundColor, setBackgroundColor] = useState("blue");
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
          <div
            style={{
              width: "600px",
              height: "600px",
              backgroundColor: colors.find(
                (c) => c.label === backgroundColor && c.forQuote === true
              ).color,
            }}
            className="grid grid-cols-8 col-gap-2 relative"
            ref={sharepicRef}
          >
            <div
              className="absolute top-0 left-0 w-full"
              style={{
                paddingLeft: "24px",
                paddingTop: "12px",
              }}
            >
              <QuoteIcon width="60" />
            </div>

            <div className="col-span-6 col-start-2 text-left flex items-center text-white">
              <div>
                <span
                  dangerouslySetInnerHTML={{ __html: quoteText }}
                  style={{ whiteSpace: "pre-line" }}
                  className={`${
                    (name !== "" || position !== "") && "mb-6"
                  } block italic font-bold text-2xl leading-none`}
                />
                <div>
                  <span
                    dangerouslySetInnerHTML={{ __html: name }}
                    className="block font-bold text-md"
                  />
                  <span
                    dangerouslySetInnerHTML={{ __html: position }}
                    style={{
                      whiteSpace: "pre-line",
                      display: position === "" ? "none" : "block",
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className="col-span-12 flex justify-center absolute bottom-0 left-0 w-full"
              style={{ height: "4rem" }}
            >
              <AcaWhite width="200" className="absolute bottom-0" />
            </div>
            <ColouredBar width="600" className="absolute bottom-0" />
          </div>
        </div>
        <div className="col-span-12 sm:col-span-3">
          <label htmlFor="backgroundColor" className="block">
            Hintergrundfarbe
          </label>
          <select
            name="backgroundColor"
            id="backgroundColor"
            onChange={(e) => setBackgroundColor(e.target.value)}
            className="border-2 border-black"
          >
            {colors.map(
              (color) =>
                color.forQuote && <option value={color.label}>{color.name}</option>
            )}
          </select>
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
