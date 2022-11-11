import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import View from "./View";
import Popup from "./Popup";

class App extends Component {
  state = {
    note: {
      firstname: "",
      lastname: "",
      phonenumber: "",
      role: "",
      message: "",
    },
    showPopup: false,
  };
  changeStateHandler = (event) => {
    this.setState({
      note: { ...this.state.note, [event.target.name]: event.target.value },
    });
  };
  resetStateHandler = () => {
    window.location.reload()
  };
  submitHandler = (e) => {
    e.preventDefault();
    this.setState({
      showPopup: !this.state.showPopup,
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
          /* Instead of doing this:
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phonenumber={this.state.phonenumber}
          role={this.state.role}
          message={this.state.message} */

          /* DO THIS:  */
          {...this.state.note}
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
          {...this.state.note}
          changeStateHandler={this.changeStateHandler}
          submitHandler={this.submitHandler}
        ></Form>
        <View {...this.state.note}></View>
        <div>{this.popup()}</div>
      </div>
    );
  }
}

export default App;
