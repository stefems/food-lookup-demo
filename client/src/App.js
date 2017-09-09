import React, { Component } from "react";
import Client from "./Client";
const axios = require('axios');


class App extends Component {
  ComponentDidMount() {
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
      </div>
    );
  }
}

export default App;
