import React from "react";
import "./Navigation.css";
import "../List/List.css";

function Navigation(props) {
  return (
    <div className="navigation-container">
      <h3> Navigation </h3>
      <p>
        Navigation component is used as a medium to jump between different pages
        or components of a website.
      </p>
      <h3> Usage </h3>
      <h3> Desktop Navigation </h3>
      <p> Left Nav </p>
      <div className="navigation-examples">
        <ul className="nav nav-left">
          <li>
            <a className="nav-link" href="nav#">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="nav#">
              Showcase
            </a>
          </li>
          <li>
            <a className="nav-link" href="nav#">
              Pricing
            </a>
          </li>
          <li>
            <a className="nav-link" href="nav#">
              About
            </a>
          </li>
          <li>
            <a className="nav-link" href="nav#">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <p> Right Nav </p>
      <div className="navigation-examples">
        <ul className="nav nav-right">
          <li>
            <a className="nav-link" href="nav#">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="nav#">
              Showcase
            </a>
          </li>
          <li>
            <a className="nav-link" href="nav#">
              Pricing
            </a>
          </li>
          <li>
            <a className="nav-link" href="nav#">
              About
            </a>
          </li>
          <li>
            <a className="nav-link" href="nav#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
