import React, { useState, Fragment } from "react";

import Button from "Components/Atoms/Button";
import { ArrowDown } from "Components/Atoms/SvgIcons";

import { Books, Circulars, Wrapper } from "./style";
import Typography from "Components/Atoms/Typography";
import Book from "./Book";
import Circular from "./Circular";

// External variables
const tabContent = {
  books: [
    "NIGERIAN TAX OFFENCES AND PENALTIES",
    "NIGERIAN TAX OFFENCES AND PENALTIES",
    "NIGERIAN TAX OFFENCES AND PENALTIES",
  ],
  circulars: [
    {
      title: "1993",
      list: [
        "NIGERIAN TAX OFFENCES AND PENALTIES",
        "NIGERIAN TAX OFFENCES AND PENALTIES",
        "NIGERIAN TAX OFFENCES AND PENALTIES",
      ],
    },
    {
      title: "1994",
      list: [
        "NIGERIAN TAX OFFENCES AND PENALTIES",
        "NIGERIAN TAX OFFENCES AND PENALTIES",
        "NIGERIAN TAX OFFENCES AND PENALTIES",
      ],
    },
    {
      title: "1995",
      list: [
        "NIGERIAN TAX OFFENCES AND PENALTIES",
        "NIGERIAN TAX OFFENCES AND PENALTIES",
        "NIGERIAN TAX OFFENCES AND PENALTIES",
      ],
    },
    {
      title: "1996",
      list: [
        "NIGERIAN TAX OFFENCES AND PENALTIES",
        "NIGERIAN TAX OFFENCES AND PENALTIES",
        "NIGERIAN TAX OFFENCES AND PENALTIES",
      ],
    },
  ],
};

// Type defination
interface Props {
  togglerList: string[];
}

// Component
const LibraryDropdown: React.FC<Props> = (props) => {
  // States
  const [showBooks, setShowBooks] = useState(false);
  const [showCircular, setShowCircular] = useState(false);
  const [showCircularChild, setShowCircularChild] = useState(false);
  const [activeCircularChild, setActiveCircularChild] = useState({
    index: -1,
    show: false,
  });

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
                      {tabContent.books.map((book, index) => (
                        <Book key={index} title={book} />
                      ))}
                    </Books>
                  )}
                </Fragment>
              );
            } else
              return (
                <Fragment key={index}>
                  <Button
                    key={index}
                    className="toggler-btn"
                    onClick={() => setShowCircular(!showCircular)}
                  >
                    <Typography as="span" className="" text={item} />
                    <ArrowDown width={"1.6rem"} />
                  </Button>

                  {showCircular && (
                    <Circulars>
                      {tabContent.circulars.map((circular, index) => (
                        <Fragment>
                          <Button
                            key={index}
                            className="circular-toggle-style text-left"
                            onClick={() => {
                              setShowCircularChild(!showCircularChild);
                              if (index !== activeCircularChild.index) {
                                setActiveCircularChild({
                                  index,
                                  show: true,
                                });
                              } else {
                                setActiveCircularChild({
                                  index,
                                  show: !activeCircularChild.show,
                                });
                              }
                            }}
                          >
                            <Typography
                              as="span"
                              className="p-9"
                              text={circular.title}
                            />
                            <ArrowDown width={"1.6rem"} />
                          </Button>

                          {circular.list &&
                          activeCircularChild.show &&
                          activeCircularChild.index === index ? (
                            <Circulars>
                              {circular.list.map((book, index) => (
                                <Circular key={index} title={book} />
                              ))}
                            </Circulars>
                          ) : null}
                        </Fragment>
                      ))}
                    </Circulars>
                  )}
                </Fragment>
              );
          })}
    </Wrapper>
  );
};

export default LibraryDropdown;
