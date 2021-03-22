import React from "react";
import "./Badge.css";

function Badge(props) {
  return (
    <div className="badge-container">
      <h2> Badge </h2>
      <p>
        Badges are used to display an item's current status for quick
        recognition
      </p>
      <h3> Usage </h3>
      <h3> Badge with Colors and Round Badges </h3>
      <div className="badges">
        <div className="square-badge"> DEFAULT </div>
        <div className="square-badge success"> SUCCESS </div>
        <div className="square-badge removed"> REMOVED </div>
        <div className="square-badge new"> NEW </div>
        <div className="square-badge warning"> WARNING </div>
        <div className="round-badge"> 7 </div>
        <div className="round-badge success"> 8 </div>
        <div className="round-badge removed"> 9 </div>
        <div className="round-badge new"> 10 </div>
      </div>
      <h3> Badge on Icons </h3>
      <p>
        Badges on icons represent the status or quantity of the item which the
        icon portrays.
      </p>
      <div className="badges">
        <div className="icons">
          <i className="fas fa-shopping-cart">
            <span className="badge-icon position"> 6 </span>
          </i>
        </div>
        <div className="icons">
          <i className="fas fa-shopping-cart">
            <span className="badge-icon position badge-icon-green"> 2 </span>
          </i>
        </div>
        <div className="icons">
          <i className="fas fa-envelope">
            <span className="badge-icon position"> 2 </span>
          </i>
        </div>
        <div className="icons">
          <i className="fas fa-envelope">
            <span className="badge-icon position badge-icon-green"> 2 </span>
          </i>
        </div>
        <div className="icons">
          <i className="far fa-envelope">
            <span className="dot-badge position"></span>
          </i>
        </div>
        <div className="icons">
          <i className="far fa-envelope">
            <span className="dot-badge position badge-icon-green"></span>
          </i>
        </div>
      </div>
      <h3> Notes: </h3>
      <p>
        The icons used above are taken from&nbsp;
        <span>
          <a href="https://fontawesome.com/">FontAwesome Icons</a>
        </span>
      </p>
    </div>
  );
}

export default Badge;
