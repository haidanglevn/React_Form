import "./View.css";

const View = (props) => {
  return (
    <div className="view">
      <h1><span>This is your form:</span></h1>
      <p>
        <span>First Name:</span> {props.firstname}
      </p>
      <p>
        <span>Last Name:</span> {props.lastname}
      </p>
      <p>
        <span>Phone Number:</span> {props.phonenumber}
      </p>
      <p>
        <span>Role: </span>
        {props.role}
      </p>
      <p>
        <span>Message:</span> <br></br> <div id="message">{props.message}</div>
      </p>
    </div>
  );
};

export default View;
