import React from "react";

import Button from "Components/Atoms/Button";

import { BooksWrapper, Top, Wrapper } from "./style";
import Book from "./Book";

// Type defination
interface Props {
  data?: Array<any>;
  afterSuccess?: () => void;
}

// Component
const Libraries: React.FC<Props> = ({ afterSuccess, data }) => {
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
        {data?.length ? data?.map(() => <Book />) : "E no dey"}
      </BooksWrapper>
    </Wrapper>
  );
};

export default Libraries;
