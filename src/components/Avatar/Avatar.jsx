import React from "react";
import "./Avatar.css";

export const imageList = [
  {
    id: 7,
    src: "https://ui-avatars.com/api/?name=Jaynil+Gaglani",
    height: 16,
    width: 16,
    name: "Jaynil",
  },
  {
    id: 2,
    src:
      "https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    width: 24,
    height: 24,
    className: "avatar__image-sm",
    name: "John",
  },
  {
    id: 6,
    src:
      "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fHdvbWFufGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    width: 32,
    height: 32,
    className: "avatar__image-md",
    name: "Wanda",
  },
  {
    id: 3,
    src:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    width: 48,
    height: 48,
    name: "Ben",
  },
  {
    id: 1,
    src:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    width: 64,
    height: 64,
    name: "Kevin",
  },
  {
    id: 4,
    src:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    width: 96,
    height: 96,

    name: "Paul",
  },
  {
    id: 5,
    src:
      "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    width: 128,
    height: 128,
    className: "avatar__image-lg",
    name: "Stacy",
  },
];

function Avatar(props) {
  return (
    <div className="avatar-container">
      <h2> Avatar</h2>
      <p className="avatar-desc">
        Avatar is a graphical representation of a user or user's character or
        personna.
      </p>
      <h3> Usage </h3>
      <div className="avatar-images">
        {imageList.map(({ id, src }) => (
          <img key={id} className="avatar" src={src} alt="" />
        ))}
      </div>
      <h3> Avatar Sizes </h3>
      <p>
        You can modify the size of Avatars by modifying the width and height
        property of images.
      </p>
      <div className="avatar-images size">
        {imageList.map(({ id, src, className }) => {
          return (
            className && (
              <img
                className={`avatar--size ${className}`}
                key={id}
                src={src}
                alt=""
              />
            )
          );
        })}
      </div>
      <h3> Avatar with Badge</h3>
      <p>
        Sometimes, you need to show a badge on the bottom right corner of the
        avatar.
      </p>
      <div className="avatar-images ">
        {imageList.map(({ id, src }) => (
          <div key={id} className="badge">
            <img className="avatar" key={id} src={src} alt="" />
            <span className="avatar__badge position"></span>
          </div>
        ))}
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

export default Avatar;
