import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SectionLoaderStyle } from "./style";

// Type defination
interface Props {}

// Component
const SectionLoader: React.FC<Props> = () => {
  // Data to display
  return (
    <SectionLoaderStyle>
      <SkeletonTheme baseColor="#e5e5e5" highlightColor="#f0f0f0">
        <Skeleton width={"15rem"} height={"1rem"} className="heading" />
        <Skeleton width={"15rem"} height={"1rem"} className="heading" />
      </SkeletonTheme>
    </SectionLoaderStyle>
  );
};

export default SectionLoader;
