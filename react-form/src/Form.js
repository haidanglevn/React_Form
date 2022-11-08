import "./Form.css";

const Form = (props) => {
  return (
    <form>
      <label>
        First Name:
        <input
          type={"text"}
          name={"firstname"}
          onChange={props.changeStateHandler}
        ></input>
      </label>
      <label>
        Last Name:
        <input
          type={"text"}
          name={"lastname"}
          onChange={props.changeStateHandler}
        ></input>
      </label>
      <label>
        Phone Number:
        <input
          type={"number"}
          name={"phonenumber"}
          onChange={props.changeStateHandler}
        ></input>
      </label>
      <label>
        Role:
        <select name="role" onChange={props.changeStateHandler}>
          <option value={""} selected disabled>Please choose a role</option>
          <option value={"teacher"}>Teacher</option>
          <option value={"student"}>Student</option>
        </select>
      </label>
      <label>
        Message:
        <textarea
        name="message"
          placeholder="Enter your message here"
          onChange={props.changeStateHandler}
        ></textarea>
      </label>
      <button onClick={props.submitHandler}>Submit</button>
    </form>
  );
};

export default Form;
