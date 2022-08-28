import React from "react";
import "./List.css";
import "../Avatar/Avatar.css";
import { imageList } from "../Avatar/Avatar";

const listExample = [
  "Call Of Duty Warzone",
  "Minecraft",
  "Animal Crossing: New Horizon",
  "Grand Theft Auto 5",
  "League Of Legends",
  "The Last Of Us Part 2",
];

function List(props) {
  return (
    <div className="list-container">
      <h3> List </h3>
      <p> List component is used to display multiple items in form of a list</p>
      <h3> Usage </h3>
      <h3> Simple List with Variations </h3>
      <div className="list-examples">
        <div>
          <ul className="list__group">
            {listExample.map((item, index) => (
              <li className="list__item list__item--border" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="list__group">
            {listExample.map((item, index) => (
              <li
                className={`list__item list__item--border ${
                  index & 1 ? "list__item--active " : null
                }`}
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="list__group">
            {listExample.map((item, index) => (
              <li
                tabIndex={`${index & 1 ? "-1" : 0}`}
                className={`list__item list__item--border ${
                  index & 1 ? "list__item--disabled" : null
                }`}
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <h3> Stacked List </h3>
      <div className="list-examples">
        <ul className="list__group">
          {imageList.slice(0, 4).map(({ id, src, name }) => (
            <li className={`list__item list__item--border`} key={id}>
              <img className="avatar" key={id} src={src} alt="" />
              <div className="list--stacked">
                <h3> {name} </h3>
                <p>{name.toLowerCase()}@gmail.com</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
