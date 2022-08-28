import React from "react";
import "./Alert.css";

function Alert(props) {
  return (
    <div className="alert-container">
      <h2> Alert </h2>
      <p>
        Alerts are used to communicate a state that affects a system, feature or
        page.
      </p>
      <h3> Usage </h3>
      <div className="alert-examples">
        <div className="alert alert--warning">
          <i className="fas fa-exclamation-triangle fa-lg"></i>
          <span className="alert--content">
            Warning! You are following some bad practice
          </span>
        </div>
        <div className="alert alert--error">
          <i className="fas fa-exclamation-circle fa-lg"></i>
          <span className="alert--content">
            Error! Something really wrong has occured
          </span>
        </div>
        <div className="alert alert--success">
          <i className="fas fa-check-circle fa-lg"></i>
          <span className="alert--content">
            Success! You have successfully completed the task
          </span>
        </div>
      </div>
      <h3> Notes: </h3>
      <p>
        The icons used above are taken from&nbsp;
        <span>
          <a className="anchor" href="https://fontawesome.com/">
            FontAwesome Icons
          </a>
        </span>
      </p>
    </div>
  );
}

export default Alert;
