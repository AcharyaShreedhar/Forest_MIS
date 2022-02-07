import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import { Button } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "./ConfirmationDialoge.scss";

export class ConfirmationDialoge extends Component {
  render() {
    const {
      showDialog,
      title,
      body,
      confirmLabel,
      cancelLabel,
      onYes,
      onClose,
      info,
    } = this.props;
    return (
      <div>
        <Modal
          className="app-modal small"
          key="dsm-7"
          backdrop="static"
          show={showDialog}
          onHide={this.hideModal}
        >
          <div className="confirmation-modal">
            <div className="modal-header">
              <FontAwesomeIcon size="2x" icon={faInfoCircle} />
              <span className="dsl-b20 bold pl-2">{title}</span>
            </div>
            <div className="modal-body d-flex align-items-center px-5">
              <div className="d-flex d-flex-3 align-items-center">
                <span className="dsl-b18 text-500">{body}</span>
              </div>
              <span className="dsl-l12 text-500 mt-2">{info}</span>
            </div>
            <div className="modal-footer">
              <Button className="text-500" type="low" onClick={() => onClose()}>
                {cancelLabel}
              </Button>
              <Button className="text-500" type="low" onClick={() => onYes()}>
                {confirmLabel}
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
ConfirmationDialoge.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  info: PropTypes.string,
  yes: PropTypes.string,
  no: PropTypes.string,
  onYes: PropTypes.func,
  onClose: PropTypes.func,
};

ConfirmationDialoge.defaultProps = {
  title: "",
  body: "",
  info: "",
  yes: "Yes",
  no: "No",
  onYes: () => {},
  onClose: () => {},
};

export default ConfirmationDialoge;
