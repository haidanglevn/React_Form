import "./Form.css";

const Form = (props) => {
  return (
    <form className="form">
      <div className="logo">
        <img src={require("./assets/sticky-notes.png")}></img>
      </div>
      <div className="avatar">
        <img src={require("./assets/smile.png")}></img>
      </div>
      <label htmlFor="firstname">
        First Name:
        <input
          type={"text"}
          name={"firstname"}
          value={props.firstname}
          onChange={props.changeStateHandler}
        ></input>
      </label>
      <label htmlFor="lastname">
        Last Name:
        <input
          type={"text"}
          name={"lastname"}
          value={props.lastname}
          onChange={props.changeStateHandler}
        ></input>
      </label>
      <label htmlFor="phonenumber">
        Phone Number:
        <input
          type={"tel"}
          name={"phonenumber"}
          value={props.phonenumber}
          onChange={props.changeStateHandler}
        ></input>
      </label>
      <label htmlFor="role">
        Role:
        <select
          name="role"
          value={props.role}
          onChange={props.changeStateHandler}
        >
          <option value={""} defaultValue disabled>
            Please choose a role
          </option>
          <option value={"teacher"}>Teacher</option>
          <option value={"student"}>Student</option>
          <option value={"other"}>Other</option>
        </select>
      </label>
      <label htmlFor="message">
        Message:
        <textarea
          name="message"
          placeholder="Enter your message here"
          value={props.message}
          onChange={props.changeStateHandler}
        ></textarea>
      </label>
      <div className="submitButton">
        <button onClick={props.submitHandler}>Submit</button>
      </div>
    </form>
  );
};

export default Form;
