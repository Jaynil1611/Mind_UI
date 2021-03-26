import React from "react";
import "./Image.css";
import { imageList } from "../Avatar/Avatar";

function Image(props) {
  return (
    <div className="image-container">
      <h3> Image </h3>
      <p> Image component is used to display images </p>
      <h3> Usage </h3>
      <h3> Image with variable size </h3>
      <div className="image-examples">
        <div>
          <img className="img--sm" src={imageList[3].src} alt="" />
        </div>
        <div>
          <img className="img--md" src={imageList[3].src} alt="" />
        </div>
        <div>
          <img className="img--lg" src={imageList[3].src} alt="" />
        </div>
      </div>
      <h3> Rounded Image </h3>
      <div className="image-examples">
        <div>
          <img className="img--sm img--rounded" src={imageList[2].src} alt="" />
        </div>
        <div>
          <img className="img--md img--rounded" src={imageList[2].src} alt="" />
        </div>
      </div>
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

export default Image;
