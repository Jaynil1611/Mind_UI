import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div className="button-container">
      <h3> Button </h3>
      <p>
        Button component can be used to perform different tasks including form
        submission, routing, triggering various action, etc.
      </p>
      <h3> Usage </h3>
      <h3> Primary Button </h3>
      <div className="button-examples">
        <button type="button" className="button button--primary button--sm">
          Button
        </button>
        <button type="button" className="button button--primary button--md">
          Button
        </button>
        <button type="button" className="button button--primary">
          Button
        </button>
        <button
          type="button"
          className="button button--primary button--lg button__link"
        >
          <a href="https://github.com/Jaynil1611/mind-ui"> Button </a>
        </button>
      </div>
      <h3> Secondary Button </h3>
      <div className="button-examples">
        <button type="button" className="button button--secondary button--sm">
          Button
        </button>
        <button type="button" className="button button--secondary button--md">
          Button
        </button>
        <button type="button" className="button button--secondary">
          Button
        </button>
        <button
          type="button"
          className="button button--secondary button--lg button__link"
        >
          <a href="https://github.com/Jaynil1611/mind-ui"> Button </a>
        </button>
      </div>
      <h3> Icon Button </h3>
      <p> Icons can be used as buttons to perform certain actions.</p>
      <div className="button-examples">
        <button className="button button__icon">
          <i className="fas fa-trash-alt fa-2x"></i>
        </button>
        <button type="button" className="button button__icon">
          <i className="fas fa-bell fa-2x"></i>
        </button>
        <button type="button" className="button button__icon">
          <i className="fas fa-play fa-2x"></i>
        </button>
      </div>
      <h3> Floating Action Button </h3>
      <div className="button-examples">
        <button type="button" className="button__action">
          +
        </button>
        <button type="button" className="button__action">
          <i className="fas fa-times"></i>
        </button>
        <button type="button" className="button__action">
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </div>
  );
}

export default Button;
