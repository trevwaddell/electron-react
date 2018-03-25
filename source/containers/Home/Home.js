import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Header from "../Header/Header";
import Modal from "../../components/Modal/Modal";
import Feedback from "../../components/Modal/Feedback";
import Lock from "../../components/Modal/Lock";

import Tabs from "../Tabs/Tabs";

class Home extends Component {
  constructor() {
    super();
    this.getModalComponent = this.getModalComponent.bind(this);
    this.state = {};
  }

  getModalComponent() {
    const { modal } = this.props;
    switch (modal.modal) {
      case "feedback":
        return <Feedback />;
      case "lock":
        return <Lock />;
      default:
        return <p>insert modal component here</p>;
    }
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Tabs />
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
