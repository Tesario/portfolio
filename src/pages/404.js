import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import { Link } from "gatsby";

const NotFoundPage = (props) => {
  return (
    <>
      <Seo lang={props.pageContext.language} />
      <Layout lang={props.pageContext.language}>
        <main>
          <section id="hero">
            <div className="container">
              <h1 className="title">Full-stack developer</h1>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default NotFoundPage;
