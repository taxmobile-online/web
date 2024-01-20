import React from "react";
import { Actions, BookStyle } from "./style";
import Typography from "Components/Atoms/Typography";
import Button from "Components/Atoms/Button";
import { formatCurrency } from "Utils/Helper";

// Type defination
interface Props {
  data?: any;
}

// Component
const Book: React.FC<Props> = ({ data }) => {
  // Data to display
  return (
    <BookStyle>
      <div className="book__top">
        <Typography as="h5" className="h-41" text="M" />
      </div>
      <div className="book__bottom">
        <Typography as="h5" className="h-21" text={data.title || "--"} />
        <Typography
          as="h5"
          className="p-15"
          text={`${formatCurrency(data.amount)}`}
        />
        <Actions className="mt-20">
          <Button
            className="btn b-3 btn-primary btn-s-1 book-btn"
            value="Read"
          />
          <Button className="book-btn" value="Download" />
        </Actions>
      </div>
    </BookStyle>
  );
};

export default Book;
// ₦