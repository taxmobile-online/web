import React from "react";

import Modal from "Components/Atoms/Modal";
import Overlay from "Components/Atoms/Overlay";

// Type defination
interface Props {
  handleCloseModal: () => void;
}

// Component
const CenterModal: React.FC<Props> = ({ handleCloseModal }) => {
  // Data to display
  return (
    <Overlay position="center">
      <Modal position="center" closeModal={handleCloseModal}></Modal>
    </Overlay>
  );
};

export default CenterModal;
