import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import { PassedFooter } from "./style";

import CenterModal from "./CenterModal";
import Button from "Components/Atoms/Button";
import { Spinner } from "Components/Atoms/Spinner";
import CreateSubSectionForm from "Components/Organisms/Forms/CreateSubSectionForm";
import { formatForSelectInput } from "Utils/Helper";

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
const CreateSubSectionModal: React.FC<Props> = (props) => {
  // Props
  const {
    showModal,
    setShowModal,
    handleFormSuccess,
    isLoading,
    formDependentApi,
    formDependentData,
    formDependentDataLoading,
  } = props;

  // Effect
  useEffect(
    () => {
      if (showModal) formDependentApi!();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [showModal]
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
          <>
            {formDependentDataLoading ? (
              <div style={{ paddingBlock: "7rem" }}>
                <Spinner style={{ marginInline: "auto" }} />
              </div>
            ) : (
              <CreateSubSectionForm
                options={formatForSelectInput(
                  formDependentData,
                  "sectionId",
                  "sectionName"
                )}
                handleAfterFormSubmit={handleFormSuccess}
              >
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
              </CreateSubSectionForm>
            )}
          </>
        </CenterModal>
      )}
    </AnimatePresence>
  );
};

export default CreateSubSectionModal;
