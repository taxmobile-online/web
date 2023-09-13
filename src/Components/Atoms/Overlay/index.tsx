import React from "react";
import { OverlayStyle } from "./style";

interface Props {
  children?: JSX.Element;
  initial?: any;
  animate?: any;
  variants?: any;
  transition?: any;
}
const Overlay: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <OverlayStyle
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      {...props}
    >
      {" "}
      {children}{" "}
    </OverlayStyle>
  );
};

export default Overlay;
