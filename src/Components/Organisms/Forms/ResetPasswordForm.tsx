import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { Form } from "formik";

import { FormField, InputField } from "Components/Molecules/FormFields";
import { SignUpFormProps, ValuesProps } from "./types";
import useAuthStore from "Store/auth.store";
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
const ResetPasswordForm: React.FC<SignUpFormProps> = () => {
  // States
  const [reRender, setReRender] = useState(false);

  // Hooks
  let { data, loading, error, sendRequest } = useApi<any>();
  const navigate = useNavigate();

  // Methods
  const handleSubmit = async (values: any) => {
    const idString =
      "6E45E8565399B432164D6F03CA99A7-f87f8e349f0aad6b9.p-E31AA17A613345CEF01195A3235F08:1702004269249-f3dc85ba320fc3e-F9F2F7A5CF19835AAC9F3DEF9EA5BD";
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
    // if (!formSubmitted) return;
    console.log({ data, error });
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

export default ResetPasswordForm;
