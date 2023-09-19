import React, { useState, Fragment } from "react";

import Button from "Components/Atoms/Button";
import { ArrowDown } from "Components/Atoms/SvgIcons";

import { Books, Wrapper } from "./style";
import Typography from "Components/Atoms/Typography";
import Book from "./Book";

// External variables
// const tabContent = {
//   books:
// }

// Type defination
interface Props {
  togglerList: string[];
}

// Component
const LibraryDropdown: React.FC<Props> = (props) => {
  // States
  const [showBooks, setShowBooks] = useState(false);

  // Props
  const { togglerList } = props;

  // Data to display
  return (
    <Wrapper>
      {togglerList && !togglerList.length
        ? null
        : togglerList.map((item, index) => {
            if (item.toLocaleLowerCase() === "books") {
              return (
                <Fragment key={index}>
                  <Button
                    className="toggler-btn"
                    onClick={() => setShowBooks(!showBooks)}
                  >
                    <Typography as="span" className="" text={item} />
                    <ArrowDown width={"1.6rem"} />
                  </Button>

                  {showBooks && (
                    <Books>
                      <Book title="NIGERIAN TAX OFFENCES AND PENALTIES" />
                      <Book title="NIGERIAN TAX OFFENCES AND PENALTIES" />
                      <Book title="NIGERIAN TAX OFFENCES AND PENALTIES" />
                    </Books>
                  )}
                </Fragment>
              );
            } else
              return (
                <Button key={index} className="toggler-btn">
                  <Typography as="span" className="" text={item} />
                  <ArrowDown width={"1.6rem"} />
                </Button>
              );
          })}
    </Wrapper>
  );
};

export default LibraryDropdown;
