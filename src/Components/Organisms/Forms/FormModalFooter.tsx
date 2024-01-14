import React from "react";
import { FormalModalFooterStyle } from "./style";
import Button from "Components/Atoms/Button";
import { Spinner } from "Components/Atoms/Spinner";

// Type defination
interface Props {
  isLoading?: boolean;
  setShowModal?: () => void;

  yesText?: string;
  handleYes?: () => void;

  noText?: string;
  handleNo?: () => void;
}

// Component
const FormalModalFooter: React.FC<Props> = (props) => {
  // Props
  const { isLoading, setShowModal, yesText, noText } = props;

  // Data to display
  return (
    <FormalModalFooterStyle>
      <Button
        type="button"
        className={"btn-color-primary"}
        onClick={setShowModal}
        value={noText}
      />
      <Button type="submit" className={"btn btn-primary btn-md"}>
        {isLoading ? (
          <Spinner style={{ width: "1rem", height: "1rem" }} />
        ) : (
          `${yesText}`
        )}
      </Button>
    </FormalModalFooterStyle>
  );
};

export default FormalModalFooter;
