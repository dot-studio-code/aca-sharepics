import ImageFixed from "../components/imageFixed";
import Layout from "../components/layout";
import { Link } from "gatsby";
import React from "react";

export default () => {
  return (
    <Layout>
      <div className="container">
        <div className="mx-auto grid grid-cols-12 col-gap-2 row-gap-2 py-5">
          <div className="col-span-12 text-center">
            <h1 className="text-xl">
              <span role="img" aria-label="hello">
                👋
              </span>{" "}
              Dennis, wähle ein Template aus
            </h1>
          </div>
          <div className="col-span-4">
            <Link to="template/quoteWithImage">
              <ImageFixed
                name="quoteWithImage.png"
                className="hover:opacity-75 transition-all ease-in-out duration-200"
              />
            </Link>
          </div>
          <div className="col-span-4">
            <Link to="template/news">
              <ImageFixed
                name="news.png"
                className="hover:opacity-75 transition-all ease-in-out duration-200"
              />
            </Link>
          </div>
          <div className="col-span-4">
            <Link to="template/quote">
              <ImageFixed
                name="quote.png"
                className="hover:opacity-75 transition-all ease-in-out duration-200"
              />
            </Link>
          </div>
          <div className="col-span-4">
            <Link to="template/image">
              <ImageFixed
                name="call.png"
                className="hover:opacity-75 transition-all ease-in-out duration-200"
              />
            </Link>
          </div>
          <div className="col-span-4">
            <Link to="template/notification">
              <ImageFixed
                name="info.png"
                className="hover:opacity-75 transition-all ease-in-out duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
