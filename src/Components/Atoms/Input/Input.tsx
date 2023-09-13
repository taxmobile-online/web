import React, { useState } from "react";
import { InputWrapper, Wrapper } from "./style";
import { EyeSlash, EyeUnSlash } from "../SvgIcons";

// Type defination
interface Props {
  label?: string;
  bottomLabel?: string;
  labelClass?: string;
  inputClass?: string;
  wrapperClass?: string;
  name?: string;
  type?: string;
  noMargin?: boolean;
}

// Component
const Input: React.FC<Props> = (props) => {
  // States
  const [showPass, setShowPass] = useState<boolean>(false);

  // Props
  const {
    label,
    name,
    type = "text",
    labelClass = "input-label",
    inputClass = "input-ele",
    wrapperClass = "normal",
    bottomLabel,
    noMargin,
    ...otherProps
  } = props;

  // Method
  const handlePasswordState = () => {
    setShowPass(!showPass);
  };

  // Data to display
  return (
    <Wrapper className={noMargin ? "no-bottom-margin" : ""}>
      {label && (
        <label htmlFor={name} className={labelClass}>
          {label}
        </label>
      )}
      <InputWrapper className={wrapperClass}>
        <input
          type={showPass ? "text" : type}
          name={name}
          className={`input ${inputClass ? inputClass : ""}`}
          {...otherProps}
        />
        {type === "password" && !showPass ? (
          <EyeSlash
            onClick={handlePasswordState}
            style={{ cursor: "pointer" }}
          />
        ) : type === "password" && showPass ? (
          <EyeUnSlash
            onClick={handlePasswordState}
            style={{ cursor: "pointer" }}
          />
        ) : null}
      </InputWrapper>
      {bottomLabel && <span className="input-bottom-label">{bottomLabel}</span>}
    </Wrapper>
  );
};

export default Input;
