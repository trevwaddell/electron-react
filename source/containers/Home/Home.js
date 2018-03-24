import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { toggleModal } from "../../actions/";

import Modal from "../../components/Modal/Modal";

class Home extends Component {
  constructor() {
    super();

    this.toggleModal = this.toggleModal.bind(this);
    this.state = {};
  }

  toggleModal(status) {
    const { toggleModal, modal } = this.props;
    toggleModal(modal);
  }

  render() {
    return (
      <Fragment>
        <div>
          <button onClick={this.toggleModal}>toggle modal</button>
        </div>
        {this.props.modal ? (
          <Modal>
            <p>feedback modalComponent will go here</p>
          </Modal>
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
  return bindActionCreators({ toggleModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
