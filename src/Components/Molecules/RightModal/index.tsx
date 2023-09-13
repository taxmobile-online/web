import Modal from "Components/Atoms/Modal";
import Overlay from "Components/Atoms/Overlay";
import React from "react";

// Type defination
interface Props {
  handleCloseModal: () => void;
}

// Component
const RightModal: React.FC<Props> = ({ handleCloseModal }) => {
  // Data to display
  return (
    <Overlay>
      <Modal position="right" closeModal={handleCloseModal}></Modal>
    </Overlay>
  );
};

export default RightModal;
