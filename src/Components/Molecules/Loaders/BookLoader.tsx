import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { BookLoaderStyle } from "./style";
import { Flex } from "Styles/layouts/Flex";

// Type defination
interface Props {
  length?: number;
}

// Component
const BookLoader: React.FC<Props> = ({ length = 1 }) => {
  // Data to display
  return (
    <>
      {[...Array(length)].map((l, i) => (
        <BookLoaderStyle key={i}>
          <SkeletonTheme baseColor="#e5e5e5" highlightColor="#f0f0f0">
            <Skeleton height={"10rem"} className="boo__loader_top" />
            <Skeleton height={".3rem"} width={"75%"} />
            <Skeleton height={".3rem"} width={"45%"} />

            <Flex className="mt-30" $gap="1rem" $flexRowAiCenter>
              <Skeleton height={"2rem"} width={"6rem"} />
              <Skeleton height={"1rem"} width={"4rem"} />
            </Flex>
          </SkeletonTheme>
        </BookLoaderStyle>
      ))}
    </>
  );
};

export default BookLoader;
