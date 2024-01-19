import React from "react";

import Button from "Components/Atoms/Button";

import { BooksWrapper, Top, Wrapper } from "./style";
import Book from "./Book";

// Type defination
interface Props {}

// Component
const Libraries: React.FC<Props> = (props) => {
  // Data to display
  return (
    <Wrapper>
      <Top>
        <Button
          className="btn btn-primary btn-md ml-auto mb-30 display-block"
          value="Create"
          onClick={() => {}}
        />
      </Top>

      <BooksWrapper>
        {[...Array(5)].map(() => (
          <Book />
        ))}
      </BooksWrapper>
    </Wrapper>
  );
};

export default Libraries;
