import React from "react";
import "./Home.css";
import "../Image/Image.css";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="home-container">
      <div className="h2 text--bold">
        Build blazingly fast web apps with
        <span className="text--primary"> Mind UI </span>
      </div>
      <div className="subtitle--md">
        Mind UI is a lightweight and modular component library which helps
        developers to build beautiful web apps with speed. Copy the below code
        to use Mind UI in your project.
      </div>
      <div>
        <button
          type="button"
          className="button button--primary button--link subtitle--md"
        >
          <Link to={"/avatar"}>
            Get Started <i className="fas fa-arrow-right"></i>
          </Link>
        </button>
      </div>
      <div className="carbon-embed">
        <iframe
          src="https://carbon.now.sh/embed/0sjigmz5A7rDWQ8pom4s"
          title="link"
          scrolling="no"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </div>
  );
}

export default Home;
