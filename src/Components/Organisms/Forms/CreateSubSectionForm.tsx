import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { Form } from "formik";

import {
  FormField,
  InputField,
  SelectField,
} from "Components/Molecules/FormFields";
import { SignUpFormProps } from "./types";
import useApi from "Utils/Hooks/useApi";
import endpoints from "Services/endpoints";
import Button from "Components/Atoms/Button";

const initialValues = {
  sectionId: "",
  subSectionName: "",
};

const validationSchema = yup.object().shape({
  sectionId: yup.string().required().min(1).label("Section Id"),
  subSectionName: yup.string().required().min(1).label("Sub section Name"),
});

// Component
const CreateSubSectionForm: React.FC<SignUpFormProps> = (props) => {
  // States
  const [reRender, setReRender] = useState(false);

  // Hooks
  let { data, loading, sendRequest } = useApi<any>();

  // Props
  const { children, handleAfterFormSubmit, options } = props;

  // Methods
  const handleSubmit = async (values: any) => {
    const requestData = {
      ...values,
    };

    // Send to backend
    await sendRequest("POST", endpoints.createSubSectionEndpoint, requestData);
    setReRender(!reRender);
  };

  const handleAfterSubmit = async () => {
    if (data?.status && data?.status === "SUCCESS") {
      handleAfterFormSubmit!();
    }
  };

  // Effects
  useEffect(() => {
    handleAfterSubmit();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reRender]);

  // Data to display
  return (
    <FormField
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <SelectField
          label="Select section"
          name="sectionId"
          options={options || []}
        />
        <InputField label="Section Name" name="subSectionName" />

        {children ? (
          children
        ) : (
          <Button
            disabled={loading}
            type="submit"
            className="btn btn-full btn-primary btn-bg-color-2 mt-35"
            value={loading ? "Saving..." : "Save"}
          />
        )}
      </Form>
    </FormField>
  );
};

export default CreateSubSectionForm;
