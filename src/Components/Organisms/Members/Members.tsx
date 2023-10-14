import React, { useState } from "react";
import { Body, Head, Wrapper } from "./style";
import Typography from "Components/Atoms/Typography";
import Button from "Components/Atoms/Button";
import { Add } from "Components/Atoms/SvgIcons";
import { Member } from "Components/Molecules/Member";
import { CenterModal } from "Components/Molecules/Modals";
import { AnimatePresence } from "framer-motion";
import { AppTagInput } from "Components/Atoms/Input";

// Type defination
interface Props {}

// Component
const Members: React.FC<Props> = () => {
  // States
  const [showModal, setShowModal] = useState(false);
  // Data to display
  return (
    <>
      <Wrapper>
        <Head>
          <Typography as="h4" className="h-18" text="Member" />
          <Button
            className="btn btn-members"
            onClick={() => setShowModal(true)}
          >
            <Add />
            Add
          </Button>
        </Head>
        <Body>
          <Member />
          <Member />
          <Member />
        </Body>
      </Wrapper>

      <AnimatePresence>
        {showModal && (
          <CenterModal
            headerType="text"
            headerTitle="Add a member"
            handleCloseModal={() => setShowModal(false)}
            yesText="Upload"
          >
            <AppTagInput label="Members" bottomLabel="Add members by email" />
          </CenterModal>
        )}
      </AnimatePresence>
    </>
  );
};

export default Members;
