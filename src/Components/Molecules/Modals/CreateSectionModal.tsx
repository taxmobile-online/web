import React from "react";
import { AnimatePresence } from "framer-motion";
import CenterModal from "./CenterModal";
import { Input } from "Components/Atoms/Input";

// Type defination
interface Props {
  showModal: boolean;
  setShowModal: () => void;
}

// Component
const CreateSectionModal: React.FC<Props> = ({ showModal, setShowModal }) => {
  // Data to display
  return (
    <AnimatePresence>
      {showModal && (
        <CenterModal
          handleCloseModal={setShowModal}
          headerType="text"
          headerTitle="Create a new section"
          yesText="Create"
        >
            <Input label="Section name" />
        </CenterModal>
      )}
    </AnimatePresence>
  );
};

export default CreateSectionModal;
