import "./Form.css";

const Form = (props) => {
  return (
    <form className="form">
      <label>
        First Name:
        <input
          type={"text"}
          name={"firstname"}
          value={props.firstname}
          onChange={props.changeStateHandler}
        ></input>
      </label>
      <label>
        Last Name:
        <input
          type={"text"}
          name={"lastname"}
          value={props.lastname}
          onChange={props.changeStateHandler}
        ></input>
      </label>
      <label>
        Phone Number:
        <input
          type={"number"}
          name={"phonenumber"}
          value={props.phonenumber}
          onChange={props.changeStateHandler}
        ></input>
      </label>
      <label>
        Role:
        <select
          name="role"
          value={props.role}
          onChange={props.changeStateHandler}
        >
          <option value={""} defaultValue>
            Please choose a role
          </option>
          <option value={"teacher"}>Teacher</option>
          <option value={"student"}>Student</option>
        </select>
      </label>
      <label>
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
