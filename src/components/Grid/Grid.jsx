import React from "react";
import "./Grid.css";
import { imageList } from "../Card/Card";
import "../Image/Image.css";

function Grid(props) {
  return (
    <div className="grid-container">
      <h3> Grid </h3>
      <p> Grid component is used to structure data in grid format </p>
      <h3> Usage </h3>
      <h3> Grid with 3 columns </h3>
      <div>
        <div className="grid-example-row">
          <div className="grid-example-col">
            <img className="img-responsive" src={imageList[0]} alt="" />
          </div>
          <div className="grid-example-col">
            <img className="img-responsive" src={imageList[1]} alt="" />
          </div>
          <div className="grid-example-col">
            <img className="img-responsive" src={imageList[2]} alt="" />
          </div>
        </div>
      </div>
      <h3> Grid with 2 columns </h3>
      <div>
        <div className="grid-example-row-2">
          <div className="grid-example-col-2">
            <img className="img-responsive" src={imageList[1]} alt="" />
          </div>
          <div className="grid-example-col-2">
            <img className="img-responsive" src={imageList[0]} alt="" />
          </div>
        </div>
      </div>
      <span></span>
      <h3> Notes : </h3>
      <p>
        The images used for showing the Avatar are obtained from&nbsp;
        <span>
          <a href="https://unsplash.com/">Unsplash.com</a>
        </span>
        .
      </p>
    </div>
  );
}

export default Grid;
