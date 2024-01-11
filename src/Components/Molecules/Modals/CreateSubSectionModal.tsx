import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import { PassedFooter } from "./style";

import CenterModal from "./CenterModal";
import Button from "Components/Atoms/Button";
import { CreateSectionForm } from "Components/Organisms/Forms";
import { Spinner } from "Components/Atoms/Spinner";

// Type defination
interface Props {
  showModal: boolean;
  setShowModal: () => void;
  handleFormSuccess?: () => void;
  isLoading?: boolean;
  formDependentApi?: () => void;
  formDependentData?: any;
  formDependentDataLoading?: boolean;
}

// Component
const CreateSubSectionModal: React.FC<Props> = ({
  showModal,
  setShowModal,
  handleFormSuccess,
  isLoading,
  formDependentApi,
}) => {
  // Effect
  useEffect(
    () => {
      formDependentApi!();
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  // Data to display
  return (
    <AnimatePresence>
      {showModal && (
        <CenterModal
          handleCloseModal={setShowModal}
          headerType="text"
          headerTitle="Create a new sub section"
          hideFooter
        >
          <CreateSectionForm handleAfterFormSubmit={handleFormSuccess}>
            <PassedFooter>
              <Button
                className={"btn-color-primary"}
                onClick={setShowModal}
                value="Cancel"
              />
              <Button type="submit" className={"btn btn-primary btn-md"}>
                {isLoading ? (
                  <Spinner style={{ width: "1rem", height: "1rem" }} />
                ) : (
                  "Create"
                )}
              </Button>
            </PassedFooter>
          </CreateSectionForm>
        </CenterModal>
      )}
    </AnimatePresence>
  );
};

export default CreateSubSectionModal;
