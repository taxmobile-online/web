import React from "react";
import { AnimatePresence } from "framer-motion";

import CenterModal from "./CenterModal";
import { CreateSectionForm } from "Components/Organisms/Forms";
import useSectionStore from "Store/sections.store";
import { ModalProps } from "./types";

// Type defination

// Component
const CreateSectionModal: React.FC<ModalProps> = (props) => {
  // Props
  const { showModal, setShowModal, handleFormSuccess } = props;

  // State
  const { isEdit } = useSectionStore();

  // Data to display
  return (
    <AnimatePresence>
      {showModal && (
        <CenterModal
          handleCloseModal={setShowModal}
          headerType="text"
          headerTitle={isEdit ? "Edit section" : "Create a new section"}
          hideFooter
        >
          <CreateSectionForm
            handleAfterFormSubmit={handleFormSuccess}
            closeFormModal={setShowModal}
          />
        </CenterModal>
      )}
    </AnimatePresence>
  );
};

export default CreateSectionModal;
