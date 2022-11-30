import "./Popup.css";
import React from "react";

const Popup = (props) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span class="close" onClick={props.closeModalHandler}>
          X
        </span>
        <h1>Check you message before sending:</h1>
        <p>
          <span></span> First Name: {props.firstname}
        </p>
        <p>Last Name: {props.lastname}</p>
        <p>Phone Number: {props.phonenumber}</p>
        <p>Role: {props.role}</p>
        <p>Message: {props.message}</p>
        <div className="popup-button">
          <button className="yes" onClick={props.postHandler}>
            Yes, I want to send it!
          </button>
          <button className="no" onClick={props.closeModalHandler}>
            No, I want to do it again.
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
