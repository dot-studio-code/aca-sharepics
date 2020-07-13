import AcaColored from "../components/svg/acaColored";
import Layout from "../components/layout";
import { Link } from "gatsby";
import React from "react";
import imageImage from "../assets/images/templates/image.jpg";
import newsImage from "../assets/images/templates/news.jpg";
import notificationImage from "../assets/images/templates/notification.jpg";
import quoteImage from "../assets/images/templates/quote.jpg";
import quoteWithImageImage from "../assets/images/templates/quoteWithImage.jpg";

export default () => {
  return (
    <Layout>
      <div style={{ backgroundColor: "rgba(235,235,235,1)" }}>
        <div className="container">
          <div className="mx-auto grid grid-cols-12 col-gap-2 row-gap-2 py-5">
            <div className="col-span-12 text-center">
              <h1 className="text-xl text-gray">
                Aircrew Alliance – Sharepic Generator
              </h1>
            </div>
            <div className="col-span-12 sm:col-span-4 text-center">
              <Link
                to="template/quoteWithImage"
                className="no-underline hover:underline"
              >
                <span className="text-md">Zitat mit Bild</span>
                <img
                  src={quoteWithImageImage}
                  className="hover:opacity-75 transition-all ease-in-out duration-200"
                />
              </Link>
            </div>
            <div className="col-span-12 sm:col-span-4 text-center">
              <Link to="template/news" className="no-underline hover:underline">
                <span className="text-md">Meldung</span>
                <img
                  src={newsImage}
                  className="hover:opacity-75 transition-all ease-in-out duration-200"
                />
              </Link>
            </div>
            <div className="col-span-12 sm:col-span-4 text-center">
              <Link
                to="template/quote"
                className="no-underline hover:underline"
              >
                <span className="text-md">Zitat ohne Bild</span>
                <img
                  src={quoteImage}
                  className="hover:opacity-75 transition-all ease-in-out duration-200"
                />
              </Link>
            </div>
            <div className="col-span-12 sm:col-span-4 text-center">
              <Link
                to="template/image"
                className="no-underline hover:underline"
              >
                <span className="text-md">Bild mit / ohne Text</span>
                <img
                  src={imageImage}
                  className="hover:opacity-75 transition-all ease-in-out duration-200"
                />
              </Link>
            </div>
            <div className="col-span-12 sm:col-span-4 text-center">
              <Link
                to="template/notification"
                className="no-underline hover:underline"
              >
                <span className="text-md">News</span>
                <img
                  src={notificationImage}
                  className="hover:opacity-75 transition-all ease-in-out duration-200"
                />
              </Link>
            </div>
            <div className="col-span-12 flex justify-center">
              <AcaColored width="300" className="mt-12" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
