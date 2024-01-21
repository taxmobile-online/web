import React, { useState } from "react";
import { TagInput } from "react-simple-tagged-input";

import { Wrapper } from "./style";

// Type defination
interface Props {
  label?: string;
  bottomLabel?: string;
  onChange?: any;
  errorMessage?: string;
}

// Component
const AppTagInput: React.FC<Props> = (props) => {
  // States
  const [, setSelected] = useState([]);

  // Props
  const { label, bottomLabel, onChange, errorMessage } = props;

  // Data to display
  return (
    <Wrapper>
      {label && <label className="input-label">{label}</label>}
      <TagInput
        editOnRemove
        onInputChange={onChange || setSelected}
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
          borderRadius: ".8rem",
          border: "1px solid var(--color-2)",
          backgroundColor: "transparent",
          padding: ".2rem .2rem .2rem 1rem",
        }}
        tagRemoveButton={{
          buttonStyle: { padding: ".5rem", marginLeft: ".5rem" },
        }}
      />
      {errorMessage && (
        <span className="input-error-message" style={{ color: "#e22335" }}>
          {errorMessage}
        </span>
      )}
      {bottomLabel && <span className="input-bottom-label">{bottomLabel}</span>}
    </Wrapper>
  );
};

export default AppTagInput;
