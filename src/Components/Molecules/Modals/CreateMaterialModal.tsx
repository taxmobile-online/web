import React from "react";
import { AnimatePresence } from "framer-motion";

import CenterModal from "./CenterModal";
import { CreateMaterialForm } from "Components/Organisms/Forms";
import { ModalProps } from "./types";


// Component
const CreateMaterialModal: React.FC<ModalProps> = ({
  showModal,
  setShowModal,
}) => {
  // Data to display
  return (
    <AnimatePresence>
      {showModal && (
        <CenterModal
          handleCloseModal={setShowModal}
          headerType="text"
          headerTitle="Create a new material"
          hideFooter
        >
          <CreateMaterialForm />
        </CenterModal>
      )}
    </AnimatePresence>
  );
};

export default CreateMaterialModal;
