import React, { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");

export default class Modal extends Component {
  constructor() {
    super();
    this.el = document.createElement("div");
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return createPortal(
      <div className="global-modal">{this.props.children}</div>,
      this.el
    );
  }
}
