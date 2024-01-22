import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import CenterModal from "./CenterModal";
import { Spinner } from "Components/Atoms/Spinner";
import CreateSubSectionForm from "Components/Organisms/Forms/CreateSubSectionForm";

import { formatForSelectInput } from "Utils/Helper";
import useSectionStore from "Store/sections.store";

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
    formDependentApi,
    formDependentData,
    formDependentDataLoading,
  } = props;

  // State
  const { isEdit } = useSectionStore();

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
          headerTitle={isEdit ? "Edit sub section" : "Create a new sub section"}
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
                closeFormModal={setShowModal}
              />
            )}
          </>
        </CenterModal>
      )}
    </AnimatePresence>
  );
};

export default CreateSubSectionModal;
