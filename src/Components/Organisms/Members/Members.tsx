import React from "react";
import { Body, Head, Wrapper } from "./style";
import Typography from "Components/Atoms/Typography";
import Button from "Components/Atoms/Button";
import { Add } from "Components/Atoms/SvgIcons";
import { Member } from "Components/Molecules/Member";

// Type defination
interface Props {}

// Component
const Members: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper>
      <Head>
        <Typography as="h4" className="h-18" text="Member" />
        <Button className="btn btn-members">
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
  );
};

export default Members;
