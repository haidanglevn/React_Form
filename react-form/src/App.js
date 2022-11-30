import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import View from "./View";
import Popup from "./Popup";
import Notes from "./Notes";
import axios from "axios";

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

  postHandler = () => {
    axios.post("http://localhost:3001/notes", this.state.note);
    this.resetStateHandler();
  }

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
          postHandler={this.postHandler}

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
        <Notes/>
        <div>{this.popup()}</div>
      </div>
    );
  }
}

export default App;
