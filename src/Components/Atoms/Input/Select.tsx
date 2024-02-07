import React from "react";

import { InputWrapper, Wrapper } from "./style";

import { SelectProps } from "./types";

// Component
const Select: React.FC<SelectProps> = (props) => {
  // Props
  const {
    label,
    name,
    noMargin,
    errorMessage,
    wrapperClass = "normal",
    inputClass = "input-ele",
    labelClass = "input-label",
    bottomLabel,
    placeholder,
    options,
    ...otherProps
  } = props;

  // Data to display
  return (
    <Wrapper className={noMargin ? "no-bottom-margin" : ""}>
      {label && (
        <label htmlFor={name} className={labelClass}>
          {label}
        </label>
      )}
      <InputWrapper className={wrapperClass}>
        <select
          name={name}
          id={name}
          className={`input ${inputClass ? inputClass : ""}`}
          {...otherProps}
        >
          <option value="">{placeholder ? placeholder : "Select"}</option>

          {options?.map((option: any) => (
            <option key={option.id} value={option.id || option.value}>
              {option.name || option.value}
            </option>
          ))}
        </select>
      </InputWrapper>

      {errorMessage && (
        <span className="input-error-message">{errorMessage}</span>
      )}
      {bottomLabel && <span className="input-bottom-label">{bottomLabel}</span>}
    </Wrapper>
  );
};

export default Select;
