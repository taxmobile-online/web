import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { LoaderStyle } from "./style";

// Type defination
interface Props {}

// Component
const Loader: React.FC<Props> = () => {
  // Data to display
  return (
    <LoaderStyle>
      <SkeletonTheme baseColor="#e5e5e5" highlightColor="#f0f0f0">
        <Skeleton width={"15rem"} height={"1rem"} className="heading" />
        <Skeleton width={"18rem"} height={"1rem"} className="heading mt-50" />
        <Skeleton width={"17rem"} height={"1rem"} className="heading mt-20" />
        <Skeleton width={"20rem"} height={"4.5rem"} className="button mt-60" />
        <Skeleton width={"20rem"} height={"4.5rem"} className="button mt-20" />
      </SkeletonTheme>
    </LoaderStyle>
  );
};

export default Loader;
