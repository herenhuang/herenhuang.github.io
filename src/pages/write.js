import React from "react";
import { graphql, StaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Icon from "../../content/assets/write.svg";

import "../utils/css/components/global.css";
import "../utils/normalize.css";
import "../utils/css/screen.css";

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="About me"
        keywords={[`blog`, `gatsby`, `javascript`, `writing`]}
      />
      <article className="post-content page-template no-image">
        <div className="post-content-body write">
          <h1 class="h1-svg"><Icon /></h1>
          <p>
            I absolutely love to write! And I have been lucky enough to do so for these fine folks in the past: 24 Accessibility, Code Like a Girl, Deque Systems, Envato Tuts+, Hacker Noon, Statuscode, The Mission, The Startup, UX Planet, and others.</p><p>Past topics include: <ul><li>accessibility</li><li>Commodore 64s</li><li>fruit fly genetics</li><li>front-end development</li><li>inclusive design</li><li>STEM technology</li><li>SVGs</li><li>tech business/culture</li><li>The Rock</li><li>turkeys trying to kill me</li><li>and more!</li></ul>
          </p><p>Contact me via <a href="https://www.linkedin.com/in/cariefisher" title="LinkedIn" rel="noopener noreferrer" target="_blank">LinkedIn</a> or <a href="https://twitter.com/cariefisher" rel="noopener noreferrer" title="Twitter" target="_blank">Twitter</a> if you'd like me to write for your publication or organization.</p>
        </div>
      </article>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
);
