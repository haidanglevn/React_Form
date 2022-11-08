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
  resetStateHandler = () => {
    this.setState({
      firstname: "",
      lastname: "",
      phonenumber: "",
      role: "",
      message: "",
      showPopup: false,
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    this.setState({
      showPopup: true,
    });
  };

  closeModalHandler = () => {
    this.setState({
      showPopup: false,
    });
  };

  popup = () => {
    if (this.state.showPopup == true && <Popup />) {
      return (
        <Popup
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phonenumber={this.state.phonenumber}
          role={this.state.role}
          message={this.state.message}
          closeModalHandler={this.closeModalHandler}
          resetStateHandler={this.resetStateHandler}
        ></Popup>
      );
    }
  };
  render() {
    return (
      <div className="App">
        <Form
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phonenumber={this.state.phonenumber}
          role={this.state.role}
          message={this.state.message}
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
        <div>{this.popup()}</div>
      </div>
    );
  }
}

export default App;
