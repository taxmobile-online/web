import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import CenterModal from "./CenterModal";
import { AppTagInput } from "Components/Atoms/Input";
import { FormNotification } from "../FormNotification";

// Type defination
interface Props {
  showModal: boolean;
  loading?: boolean;
  alert?: any;
  setShowModal: () => void;
  setVisibility: () => void;
  handleAddMember?: (members: any) => void;
}

// Component
const AddTeamMemberModal: React.FC<Props> = ({
  showModal,
  setShowModal,
  handleAddMember,
  alert,
  setVisibility,
  loading,
}) => {
  // States
  const [members, setMembers] = useState([]);

  // Data to display
  return (
    <AnimatePresence>
      {showModal && (
        <CenterModal
          handleCloseModal={setShowModal}
          handleYes={() => handleAddMember!(members)}
          headerType="text"
          headerTitle="Add member"
          yesText={loading ? "Adding member..." : "Add member(s)"}
        >
          <>
            <FormNotification
              className="mb-40"
              visible={alert.message}
              status={alert.status}
              message={alert.message}
              setVisibility={setVisibility}
            />
            <AppTagInput
              onChange={setMembers}
              label="Members"
              bottomLabel="Add members by email"
            />
          </>
        </CenterModal>
      )}
    </AnimatePresence>
  );
};

export default AddTeamMemberModal;
