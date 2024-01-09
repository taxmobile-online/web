import React from "react";
import { AnimatePresence } from "framer-motion";
import CenterModal from "./CenterModal";
import { CreateSectionForm } from "Components/Organisms/Forms";
import { CenterPassedFooter } from "./style";
import Button from "Components/Atoms/Button";

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
            <CenterPassedFooter>
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
            </CenterPassedFooter>
          </CreateSectionForm>
        </CenterModal>
      )}
    </AnimatePresence>
  );
};

export default CreateSectionModal;
