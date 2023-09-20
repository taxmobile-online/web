import React from "react";
import { BookStyle } from "./style";
import Typography from "Components/Atoms/Typography";
import Button from "Components/Atoms/Button";

// Type defination
interface Props {
  title: string;
}

// Component
const Book: React.FC<Props> = ({ title }) => {
  // Data to display
  return (
    <BookStyle>
      <Typography as="h5" className="h-13" text={title} />
      <Button
        className="btn btn-primary btn-small mt-20 book-btn"
        value="Read"
      />
    </BookStyle>
  );
};

export default Book;
