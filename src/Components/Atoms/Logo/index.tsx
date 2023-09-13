import React from "react";
import { Link } from "react-router-dom";

const sizes = { lg: { width: "15rem", height: "12rem" }, md: {} };
interface Props {
  size?: "lg" | "md";
}
const Logo: React.FC<Props> = ({ size = "md" }) => {
  const LogoSize = sizes[size];
  return (
    <Link to="/">
      <img src="/assets/images/logo.svg" alt="" style={LogoSize} />
    </Link>
  );
};

export default Logo;
