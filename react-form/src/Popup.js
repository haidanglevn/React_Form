import "./Popup.css";
import React from "react";

const Popup = (props) => {
  return (
    <div className="popup">
      <h1>Please check you message before sending:</h1>
      <p>First Name: {props.firstname}</p>
      <p>Last Name: {props.lastname}</p>
      <p>Phone Number: {props.phonenumber}</p>
      <p>Role: {props.role}</p>
      <p>Message: {props.message}</p>
    </div>
  );
};

export default Popup;
