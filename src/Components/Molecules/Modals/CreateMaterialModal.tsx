import React from "react";
import { AnimatePresence } from "framer-motion";
import CenterModal from "./CenterModal";
import { Input } from "Components/Atoms/Input";
import { CustomSelect } from "../CustomSelect";

// Type defination
interface Props {
  showModal: boolean;
  setShowModal: () => void;
}

// Component
const CreateMaterialModal: React.FC<Props> = ({ showModal, setShowModal }) => {
  // Data to display
  return (
    <AnimatePresence>
      {showModal && (
        <CenterModal
          handleCloseModal={setShowModal}
          headerType="text"
          headerTitle="Create a new material"
        >
          <>
            <CustomSelect value="Select" label="Section" dropdownwidth="full" />
            <CustomSelect
              value="Select"
              label="Sub section"
              dropdownwidth="full"
            />

            <Input label="Book title" />
            <CustomSelect value="Select" label="Status" dropdownwidth="full" />
            <Input label="Amount" />
          </>
        </CenterModal>
      )}
    </AnimatePresence>
  );
};

export default CreateMaterialModal;
