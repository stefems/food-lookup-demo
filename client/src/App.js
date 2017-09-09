import React, { Component } from "react";
import Client from "./Client";
const axios = require('axios');


class App extends Component {
  componentDidMount() {
    console.log("componentDidMount");
    axios
          .get("/api/food")
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
            return "not logged in";
          });
  }
  render() {

    return (
      <div>
      HELLO
      </div>
    );
  }
}

export default App;
