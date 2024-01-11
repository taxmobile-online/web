import React from "react";
import { useField } from "formik";

import { Select } from "Components/Atoms/Input";
import { SelectFieldProps } from "./types";

// Component
const SelectField: React.FC<SelectFieldProps> = ({ name, ...otherProps }) => {
  // Hooks
  const [field, meta] = useField(name);

  // Data to display
  return (
    <Select
      errorMessage={meta.touched && meta.error ? meta.error : null}
      {...field}
      {...otherProps}
    />
  );
};

export default SelectField;
