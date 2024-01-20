import React from "react";
import { EmptyContent, Wrapper } from "./style";
import Button from "Components/Atoms/Button";
import Typography from "Components/Atoms/Typography";

// Type defination
interface Props {
  message: string;
  btnLabel: string;
  handleAction?: () => void;
}

// Component
const EmptyCard: React.FC<Props> = (props) => {
  // Props
  const { message, btnLabel, handleAction } = props;

  // Data to display
  return (
    <Wrapper>
      {handleAction && (
        <Button
          className="btn btn-primary btn-md ml-auto display-block"
          value="Create"
          onClick={() => handleAction!()}
        />
      )}
      <EmptyContent>
        <Typography as="h5" className="h-31" text={message} />
        <Button
          className="btn-light btn-md"
          value={btnLabel}
          onClick={handleAction}
        />
      </EmptyContent>
    </Wrapper>
  );
};

export default EmptyCard;
