import { graphql, useStaticQuery } from "gatsby";

import { Helmet } from "react-helmet";
import React from "react";

export default ({ children }) => {
  const {
    site: {
      siteMetadata: { title, name, description },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          name
        }
      }
    }
  `);

  const longTitle = `${name} – ${title}`;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{longTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={longTitle} />
      </Helmet>
      {children}
    </>
  );
};
