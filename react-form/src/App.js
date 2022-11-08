import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import View from "./View";
import Popup from "./Popup";

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    role: "",
    message: "",
    showPopup: false,
  };
  changeStateHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  submitHandler = (event) => {
    event.preventDefault();
    console.log("submit");
  };
  render() {
    return (
      <div className="App">
        <Form
          changeStateHandler={this.changeStateHandler}
          submitHandler={this.submitHandler}
        ></Form>
        <View
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phonenumber={this.state.phonenumber}
          role={this.state.role}
          message={this.state.message}
        ></View>
        <Popup
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phonenumber={this.state.phonenumber}
          role={this.state.role}
          message={this.state.message}
        ></Popup>
      </div>
    );
  }
}

export default App;
