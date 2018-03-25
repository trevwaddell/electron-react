import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { openModal, closeModal } from "../../actions/";

import Modal from "../../components/Modal/Modal";
import FeedbackModal from "../../components/Feedback";
import LockModal from "../../components/Modal/LockModal";

class Home extends Component {
  constructor() {
    super();

    this.openModal = this.openModal.bind(this);
    this.getModalComponent = this.getModalComponent.bind(this);
    this.state = {};
  }

  openModal(modal) {
    this.props.openModal(modal);
  }

  closeModal(modal) {
    this.props.closeModal();
  }

  getModalComponent() {
    const { modal } = this.props;
    switch (modal.modal) {
      case "feedback":
        return <FeedbackModal />;
      case "lock":
        return <LockModal />;
      default:
        return <p>insert modal component here</p>;
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          <button onClick={() => this.openModal("feedback")}>
            toggle modal
          </button>
        </div>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ openModal, closeModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
