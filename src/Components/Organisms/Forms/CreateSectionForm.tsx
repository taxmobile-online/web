import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { Form } from "formik";

import { FormField, InputField } from "Components/Molecules/FormFields";
import { SignUpFormProps } from "./types";
import useApi from "Utils/Hooks/useApi";
import endpoints from "Services/endpoints";
import Button from "Components/Atoms/Button";
import { useNavigate } from "react-router-dom";

const initialValues = {
  password: "",
  passwordConfirmation: "",
};

const validationSchema = yup.object().shape({
  password: yup.string().required().min(1).label("Password"),
  //   passwordConfirmation: yup.string().required().min(1).label("Password"),
  passwordConfirmation: yup
    .string()
    .required("Please retype your password.")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

// Component
const CreateSectionForm: React.FC<SignUpFormProps> = () => {
  // States
  const [reRender, setReRender] = useState(false);

  // Hooks
  let { data, loading, sendRequest } = useApi<any>();
  const navigate = useNavigate();

  // Methods
  const handleSubmit = async (values: any) => {
    const idString =
      "84617DD95F887E8BB8940E64BDE088-42ccfe8e52aed47cb.c-C7487967C93F4ADE5070D14848EB2D:1702683779685-4e9ae1c709650f8-C8678BC5509D573AFB49719D6B64D9";
    const requestData = {
      password: values.password,
      idString,
    };

    console.log({ requestData });

    // Send to backend
    await sendRequest("POST", endpoints.resetPasswordApi, requestData);
    setReRender(!reRender);

    // if (!error) actions.resetForm();
  };

  const handleAfterSubmit = () => {
    if (data?.status && data?.status === "SUCCESS") navigate("/sign-in");
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
        <InputField label="Password" name="password" type="password" />
        <InputField
          label="Confirm Password"
          name="passwordConfirmation"
          type="password"
        />

        <Button
          disabled={loading}
          type="submit"
          className="btn btn-full btn-primary btn-bg-color-2 mt-35"
          value={loading ? "Saving..." : "Save"}
        />
      </Form>
    </FormField>
  );
};

export default CreateSectionForm;
