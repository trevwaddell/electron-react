import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { openModal, closeModal } from "../../actions/";

class Header extends Component {
  constructor() {
    super();
    this.openModal = this.openModal.bind(this);
  }

  openModal(modal) {
    this.props.openModal(modal);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.openModal("lock")}>Lock</button>
      </div>
    );
  }
}

function mapStateToProps({ modal }) {
  return {
    modal
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ openModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
