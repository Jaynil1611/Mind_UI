import React from "react";
import "./Input.css";

function Input(props) {
  return (
    <div className="input-container">
      <h3> Input </h3>
      <p> Input componnt is used to capture inputs given by the user</p>
      <h3> Usage </h3>
      <h3> Input Textbox </h3>
      <div className="input-examples">
        <div className="input-box">
          <label className="label"> Name </label>
          <input className="input" type="text" placeholder="Name" />
          <p className="input-error"> Full Name should be written*</p>
        </div>
        <div className="input-box">
          <label className="label"> Email </label>
          <input className="input" type="email" placeholder="Enter email" />
          <p className="input-error"> Please enter a valid email*</p>
        </div>
        <div className="input-box">
          <label className="label"> Password </label>
          <input
            className="input"
            type="password"
            placeholder="Enter password"
          />
          <p className="input-error"> Password should be 6 chars long*</p>
        </div>
      </div>
    </div>
  );
}

export default Input;
