import React, { useState } from "react";
import "./Toast.css";
import "../Button/Button";

const ToastContent = (props) => {
  return (
    <div className="toast">
      <i className="fas fa-exclamation-triangle fa-lg"></i>
      <span className="toast__content">
        Warning! You are following some bad practice
      </span>
      <button
        type="button"
        className="toast--close button-primary"
        onClick={() => props.setShowToast(false)}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

function Toast(props) {
  const [showToast, setShowToast] = useState(false);

  const handleToastClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <div className="toast-container">
      <h3> Toast </h3>
      <p> Toast is used to to display alerts on top of an overlay.</p>
      <h3> Usage </h3>
      <div className="toast-examples">
        <div>
          <button
            type="button"
            className="button button--secondary"
            onClick={handleToastClick}
          >
            Show Toast
          </button>
        </div>
      </div>
      {showToast && <ToastContent setShowToast={setShowToast} />}
    </div>
  );
}

export default Toast;
