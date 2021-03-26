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
      <div className="badge-examples">
        <div className="badge"> DEFAULT </div>
        <div className="badge badge--success"> SUCCESS </div>
        <div className="badge badge--removed"> REMOVED </div>
        <div className="badge badge--new"> NEW </div>
        <div className="badge badge--warning"> WARNING </div>
        <div className="badge badge--round"> 7 </div>
        <div className="badge badge--round badge--success"> 8 </div>
        <div className="badge badge--round badge--removed"> 9 </div>
        <div className="badge badge--round badge--new"> 10 </div>
      </div>
      <h3> Badge on Icons </h3>
      <p>
        Badges on icons represent the status or quantity of the item which the
        icon portrays.
      </p>
      <div className="badge-examples">
        <div className="badge__icon-container">
          <i className="fas fa-shopping-cart">
            <span className="badge__icon"> 6 </span>
          </i>
        </div>
        <div className="badge__icon-container">
          <i className="fas fa-shopping-cart">
            <span className="badge__icon badge__icon--gray"> 2 </span>
          </i>
        </div>
        <div className="badge__icon-container">
          <i className="fas fa-envelope">
            <span className="badge__icon"> 2 </span>
          </i>
        </div>
        <div className="badge__icon-container">
          <i className="fas fa-envelope">
            <span className="badge__icon badge__icon--gray"> 2 </span>
          </i>
        </div>
        <div className="badge__icon-container">
          <i className="far fa-envelope">
            <span className="badge__dot"></span>
          </i>
        </div>
        <div className="badge__icon-container">
          <i className="far fa-envelope">
            <span className="badge__dot badge__icon--gray"></span>
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
