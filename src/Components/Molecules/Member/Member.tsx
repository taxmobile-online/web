import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { Action, Email, Name, Wrapper } from "./style";

import { CenterModal } from "../Modals";
import Button from "Components/Atoms/Button";
import { Trash } from "Components/Atoms/SvgIcons";
import Typography from "Components/Atoms/Typography";
import { UserAvatar } from "Components/Atoms/UserAvatar";

// Type defination
interface Props {
  data?: any;
  handleMemberDelete?: (id: any) => void;
  isDeleting?: boolean;
}

// Component
const Member: React.FC<Props> = ({ data, handleMemberDelete, isDeleting }) => {
  // States
  const [showWarningModal, setShowWarningModal] = useState(false);

  // Data to display
  return (
    <>
      <Wrapper>
        <Name>
          <UserAvatar />
          <Typography as="h6" className="h-19" text="Brooklyn Simmons" />
        </Name>
        <Email>
          <Typography as="h6" className="h-20" text={data.email || "--"} />
        </Email>
        <Action>
          <Button
            onClick={() => setShowWarningModal(true)}
            className="btn-member-trash"
          >
            <Trash />
          </Button>
        </Action>
      </Wrapper>

      <AnimatePresence>
        {showWarningModal && (
          <CenterModal
            headerTitle="Add a member"
            handleCloseModal={() => setShowWarningModal(false)}
            handleYes={() => handleMemberDelete!(data.userId)}
            subTitle={`Are you sure you want to delete ${data.email} ?`}
            yesText={isDeleting ? "Deleting..." : "Delete"}
            disabledYesBtn={isDeleting}
            title="Delete a member"
            headerType="warning"
            messageType="warning"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Member;
