import React, { useState } from "react";
import "./Rating.css";
import "../List/List.css";

export const StarRating = ({
  preActive = 0,
  readOnly = false,
  disabled = false,
  iconType = "star",
  showFeedback = false,
  feedback,
  count = 5,
}) => {
  const [hover, setHover] = useState(0);
  const [active, setActive] = useState(preActive);

  return (
    <>
      <ul className="list--inline">
        {[...Array(count)].map((star, index) => {
          index += 1;
          return (
            <li
              key={index}
              className={`list--spacing ${
                index <= (hover || active)
                  ? `${iconType}__icon--active`
                  : ""
              } ${readOnly ? "rating--read-only" : ""} ${
                disabled ? "rating--disabled" : ""
              }`}
              onClick={() => setActive(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(active)}
            >
              <i className={`far fa-${iconType} fa-lg icon`}></i>
            </li>
          );
        })}
        {showFeedback && (
          <li className="rating--feedback">{feedback[hover || active]}</li>
        )}
      </ul>
    </>
  );
};

function Rating(props) {
  const hoverFeedback = {
    1: "Useless",
    2: "Poor",
    3: "Ok",
    4: "Good",
    5: "Excellent",
  };

  return (
    <div className="rating-container">
      <h3> Rating </h3>
      <p>
        Ratings provides insights regarding end user's opinion and feedback with
        a product.
      </p>
      <h3> Usage </h3>
      <h3> Simple Rating </h3>
      <div className="rating-examples">
        <div className="rating">
          <h3> Controlled </h3>
          <StarRating />
        </div>
        <div className="rating">
          <h3> Read Only </h3>
          <StarRating preActive={2} readOnly={true} />
        </div>
        <div className="rating">
          <h3> Disabled </h3>
          <StarRating preActive={1} disabled={true} />
        </div>
        <div className="rating">
          <h3> Customized Rating </h3>
          <StarRating iconType={"heart"} />
        </div>
      </div>
      <h3> Hover Feedback </h3>
      <div className="rating-examples">
        <div className="rating">
          <StarRating showFeedback={true} feedback={hoverFeedback} />
        </div>
      </div>
      <h3> Different Rating Counts </h3>
      <div className="rating-examples">
        <div className="rating">
          <StarRating count={5} />
        </div>
        <div className="rating">
          <StarRating count={7} />
        </div>
        <div className="rating">
          <StarRating count={9} />
        </div>
      </div>
    </div>
  );
}

export default Rating;
