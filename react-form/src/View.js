import "./View.css";

const View = (props) => {
  return (
    <div className="view">
      <h1>This is your input:</h1>
      <p>First Name: {props.firstname}</p>
      <p>Last Name: {props.lastname}</p>
      <p>Phone Number: {props.phonenumber}</p>
      <p>Role: {props.role}</p>
      <p>Message: {props.message}</p>
    </div>
  );
};

export default View;
