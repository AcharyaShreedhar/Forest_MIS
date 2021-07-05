import React, { Component } from "react";
import PropTypes from "prop-types";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import "./ConfirmationDialoge.scss";

export class ConfirmationDialoge extends Component {
  render() {
    const {
      showDialog,
      title,
      subtitle,
      confirmLabel,
      cancelLabel,
      onYes,
      onClose,
    } = this.props;
    return (
      <div>
        {showDialog && (
          <div className="custom-ui">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <button onClick={onClose}>{cancelLabel}</button>
            <button
              onClick={() => {
                onYes();
                onClose();
              }}
            >
              {confirmLabel}
            </button>
          </div>
        )}
      </div>
    );
  }
}
ConfirmationDialoge.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  showDialog: PropTypes.any,
  onYes: PropTypes.func,
  onClose: PropTypes.func,
};

ConfirmationDialoge.defaultProps = {
  title: "",
  subtitle: "",
  showDialog: false,
  onYes: () => {},
  onClose: () => {},
};

export default ConfirmationDialoge;

// confirmAlert({
//   customUI: ({
//     onClose,
//     showDialog,
//     title,
//     subtitle,
//     confirmLabel,
//     cancelLabel,
//     onYes,
//     onClose,
//   }) => {
//     return (
//       <div className="custom-ui">
//         <h1>{title}</h1>
//         <p>{subtitle}</p>
//         <button onClick={onClose}>{cancelLabel}</button>
//         <button
//           onClick={() => {
//             onYes();
//             onClose();
//           }}
//         >
//           {confirmLabel}
//         </button>
//       </div>
//     );
//   },
// });


