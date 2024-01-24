import React, { useRef } from "react";
import { Wrapper } from "./style";
import { useParams } from "react-router-dom";

// Type defination
interface Props {}

// Component
const Read: React.FC<Props> = () => {
  // Ref
  const viewer = useRef<any>(null);

  // Hooks
  const params = useParams();
  console.log({ params });

  // Data to display
  return <Wrapper></Wrapper>;
};

export default Read;
