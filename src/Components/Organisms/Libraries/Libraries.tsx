import React from "react";

import Button from "Components/Atoms/Button";

import { BooksWrapper, Top, Wrapper } from "./style";
import Book from "./Book";
import BookLoader from "Components/Molecules/Loaders/BookLoader";

// Type defination
interface Props {
  data?: Array<any>;
  isLoading?: boolean;
  handleAction?: () => void;
}

// Component
const Libraries: React.FC<Props> = ({ isLoading, data, handleAction }) => {
  // Data to display
  return (
    <Wrapper>
      {handleAction && (
        <Top>
          <Button
            className="btn btn-primary btn-md ml-auto mb-30 display-block"
            value="Create"
            onClick={handleAction}
          />
        </Top>
      )}

      <BooksWrapper>
        {isLoading ? (
          <BookLoader length={3} />
        ) : (
          <>
            {data?.length
              ? [...data]
                  ?.reverse()
                  .map((book, index) => <Book key={index} data={book} />)
              : "E no dey"}
          </>
        )}
      </BooksWrapper>
    </Wrapper>
  );
};

export default Libraries;
