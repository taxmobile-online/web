import React from "react";
import { Wrapper } from "./style";
import Button from "Components/Atoms/Button";
import { ArrowLeft } from "Components/Atoms/SvgIcons";

// Type defination
interface Props {
  children?: JSX.Element;
}

// Component
const ProfileInfoTemplate: React.FC<Props> = (props) => {
  // Props
  const { children } = props;
  // Data to display
  return (
    <Wrapper>
      <Button className="btn-back mb-20">
        <ArrowLeft width={17} height={17} />
        Back
      </Button>
      {children}
    </Wrapper>
  );
};

export default ProfileInfoTemplate;
