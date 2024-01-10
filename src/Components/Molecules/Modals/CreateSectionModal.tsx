import React from "react";
import { AnimatePresence } from "framer-motion";

import { PassedFooter } from "./style";

import CenterModal from "./CenterModal";
import Button from "Components/Atoms/Button";
import { CreateSectionForm } from "Components/Organisms/Forms";

// Type defination
interface Props {
  showModal: boolean;
  setShowModal: () => void;
  handleFormSuccess?: () => void;
}

// Component
const CreateSectionModal: React.FC<Props> = ({
  showModal,
  setShowModal,
  handleFormSuccess,
}) => {
  // Data to display
  return (
    <AnimatePresence>
      {showModal && (
        <CenterModal
          handleCloseModal={setShowModal}
          headerType="text"
          headerTitle="Create a new section"
          hideFooter
        >
          <CreateSectionForm handleAfterFormSubmit={handleFormSuccess}>
            <PassedFooter>
              <Button
                className={"btn-color-primary"}
                onClick={setShowModal}
                value="Cancel"
              />
              <Button
                type="submit"
                className={"btn btn-primary btn-md"}
                value="Create"
              />
            </PassedFooter>
          </CreateSectionForm>
        </CenterModal>
      )}
    </AnimatePresence>
  );
};

export default CreateSectionModal;
