import React, { useRef, useState } from "react";
import { colors, notificationTypes } from "../../config/vars";

import AcaColored from "../../components/svg/acaColored";
import ColouredBar from "../../components/svg/colouredBar";
import { Link } from "gatsby";
import NotificationIcon from "../../components/notificationIcon";
import { formatEmojis } from "../../components/lib/lib";
import htmlToImage from "html-to-image";
import slugify from "react-slugify";

export default () => {
  const [text, setText] = useState(
    "{Hier} kommt der Text rein. Setze Text in [eckige Klammern], damit die Farbe geändert wird."
  );
  const [type, setType] = useState("question");
  const [scale, setScale] = useState(100);
  const sharepicRef = useRef(null);

  const html2image = () => {
    htmlToImage
      .toJpeg(sharepicRef.current, { quality: 1, width: 600, height: 600 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = `sharepic-${slugify(text)}.jpg`;
        link.href = dataUrl;
        link.click();
      });
  };

  return (
    <div className="container p-5">
      <Link to="/" className="block text-center text-md">← zurück zur Auswahl</Link>
      <div className="grid grid-cols-12 col-gap-2 py-2">
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
            <div
              className="absolute top-0 left-0 w-full h-full z-20"
              style={{
                backgroundColor: "#fff",
              }}
            />
            <div className="absolute w-full top-0 left-0 text-gray z-30 flex justify-center mt-4">
              <div className="flex items-center text-gray font-bold italic">
                <NotificationIcon type={type} className="inline mr-3" />
                {
                  notificationTypes.find(
                    (notificationType) => notificationType.label === type
                  ).text
                }
              </div>
            </div>

            <div className="col-span-6 w-full col-start-2 text-left flex items-center justify-center pb-24 text-gray z-30 overflow-hidden">
              <div>
                <span
                  dangerouslySetInnerHTML={{
                    __html: formatEmojis(
                      text
                        .replace(/\[/gi, `<span class='text-gray'>`)
                        .replace(/\]/gi, `</span>`)
                        .replace(
                          /\{/gi,
                          `<span style='font-size: ${
                            parseInt(scale) * 4 + 100
                          }%'>`
                        )
                        .replace(/\}/gi, `</span>`)
                    ),
                  }}
                  style={{
                    whiteSpace: "pre-line",
                    color: colors.find(
                      (color) =>
                        color.label ===
                        notificationTypes.find(
                          (notificationType) => notificationType.label === type
                        ).color
                    ).color,
                  }}
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
          <label htmlFor="type" className="block">
            Meldungsart
          </label>
          <select
            name="type"
            id="type"
            onChange={(e) => setType(e.target.value)}
            className="border-2 border-black"
          >
            {notificationTypes.map((notificationType) => (
              <option value={notificationType.label}>
                {notificationType.text}
              </option>
            ))}
          </select>
          <label htmlFor="text" className="block">
            Text
          </label>
          <textarea
            id="text"
            rows={4}
            cols={30}
            defaultValue={text}
            onChange={(e) => setText(e.target.value)}
            className="border-2 border-black"
          />
          {text.match(/\{|\}/gi) && (
            <>
              <label htmlFor="scale" className="block">
                Zoomfaktor für Text
              </label>
              <input
                type="range"
                id="scale"
                name="scale"
                min="0"
                defaultValue={scale}
                max="100"
                onChange={(e) => setScale(e.target.value)}
              />
            </>
          )}

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
