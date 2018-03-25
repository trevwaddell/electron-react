import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Header from "../Header/Header";
import Modal from "../../components/Modal/Modal";

class Home extends Component {
  constructor() {
    super();
    this.getModalComponent = this.getModalComponent.bind(this);
    this.state = {};
  }

  getModalComponent() {
    const { modal } = this.props;
    switch (modal.modal) {
      case "lock":
        return <p> Lock Modal </p>;
      default:
        return <p>insert modal component here</p>;
    }
  }

  render() {
    return (
      <Fragment>
        <Header />
        {this.props.modal.open ? (
          <Modal>{this.getModalComponent()}</Modal>
        ) : null}
      </Fragment>
    );
  }
}

function mapStateToProps({ modal }) {
  return {
    modal
  };
}

export default connect(mapStateToProps)(Home);
