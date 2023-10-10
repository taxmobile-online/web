import React, { useState } from "react";
import { Wrapper } from "./style";
import { TagInput } from "react-simple-tagged-input";

// Type defination
interface Props {
  label?: string;
  bottomLabel?: string;
}

// Component
const AppTagInput: React.FC<Props> = (props) => {
  // States
  const [, setSelected] = useState([]);

  // Props
  const { label, bottomLabel } = props;

  // Data to display
  return (
    <Wrapper>
      {label && <label className="input-label">{label}</label>}
      <TagInput
        onInputChange={setSelected}
        placeholder="Enter email and press enter"
        style={{
          borderRadius: "1.2rem",
          border: "2px solid var(--color-6)",
          backgroundColor: "var(--color-white)",
          padding: "1.7rem 1.5rem",
          fontFamily: "inherit",
        }}
        tagStyle={{
          fontSize: "1.3rem",
        }}
      />
      {bottomLabel && <span className="input-bottom-label">{bottomLabel}</span>}
    </Wrapper>
  );
};

export default AppTagInput;
