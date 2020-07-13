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
              <Link to="template/quoteWithImage">
                <img
                  src={quoteWithImageImage}
                  className="hover:opacity-75 transition-all ease-in-out duration-200"
                />
              </Link>
            </div>
            <div className="col-span-12 sm:col-span-4">
              <Link to="template/news">
                <img
                  src={newsImage}
                  className="hover:opacity-75 transition-all ease-in-out duration-200"
                />
              </Link>
            </div>
            <div className="col-span-12 sm:col-span-4">
              <Link to="template/quote">
                <img
                  src={quoteImage}
                  className="hover:opacity-75 transition-all ease-in-out duration-200"
                />
              </Link>
            </div>
            <div className="col-span-12 sm:col-span-4">
              <Link to="template/image">
                <img
                  src={imageImage}
                  className="hover:opacity-75 transition-all ease-in-out duration-200"
                />
              </Link>
            </div>
            <div className="col-span-12 sm:col-span-4">
              <Link to="template/notification">
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
