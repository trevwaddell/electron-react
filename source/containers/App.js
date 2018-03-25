import React, { Component } from "react";
const { ipcRenderer } = window.require("electron");

import Home from "./Home/Home";

export default class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    ipcRenderer.send("UI_MOUNTED", `App mounted at ${Date.now()}`);
  }

  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}
