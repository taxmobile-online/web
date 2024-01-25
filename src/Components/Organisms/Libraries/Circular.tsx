import React from "react";

import { BookStyle } from "./style";

import { Flex } from "Styles/layouts/Flex";
import Button from "Components/Atoms/Button";
import Typography from "Components/Atoms/Typography";

// Type defination
interface Props {
  title: string;
}

// Component
const Circular: React.FC<Props> = ({ title }) => {
  // Data to display
  return (
    <BookStyle>
      <Typography as="h5" className="h-13" text={title} />
      <Flex $gap="1.5rem" $flexRowAiCenter>
        <Button
          className="btn btn-primary btn-small mt-20 book-btn"
          value="Read"
        />
        <Button
          className="btn btn-primary btn-success btn-small mt-20 book-btn"
          value="Buy"
        />
      </Flex>
    </BookStyle>
  );
};

export default Circular;
