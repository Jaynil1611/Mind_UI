import React, { useState } from "react";
import "./Modal.css";
import "../Button/Button.css";

const ModalContent = ({ setShowModal, handleModalClose }) => {
  return (
    <div className="modal" onClick={handleModalClose}>
      <div className="modal-content">
        <h3> Modal Heading </h3>
        <p>
          Hello, modals can be used as interactive elements to create
          informative dialogs with the user.
        </p>
        <button
          type="button"
          className="close button-primary"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

function Modal(props) {
  const [showModal, setShowModal] = useState(false);

  const handleModalClick = () => {
    setShowModal(true);
    setTimeout(() => setShowModal(false), 5000);
  };

  const handleModalClose = (e) => {
    e.target.classList[0] === "modal" && setShowModal(false);
  };

  return (
    <div className="modal-container">
      <h3> Modal </h3>
      <p>
        Modal component is used for creating dialogs, popovers, lightboxes, etc.
      </p>
      <h3> Usage </h3>
      <div className="modal-examples">
        <button
          type="button"
          className="button button-primary"
          onClick={handleModalClick}
        >
          Open Modal
        </button>
      </div>
      <div>
        {showModal && (
          <ModalContent
            handleModalClose={handleModalClose}
            setShowModal={setShowModal}
          />
        )}
      </div>
    </div>
  );
}

export default Modal;
