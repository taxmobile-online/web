import React, { useEffect, useState } from "react";

import * as yup from "yup";
import { Form } from "formik";
import { useNavigate } from "react-router-dom";

import useApi from "Utils/Hooks/useApi";
import { SignUpFormProps } from "./types";
import endpoints from "Services/endpoints";

import Button from "Components/Atoms/Button";
import { FormField, InputField } from "Components/Molecules/FormFields";

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
  let { data, loading, sendRequest } = useApi<any>();
  const navigate = useNavigate();

  // Methods
  const handleSubmit = async (values: any) => {
    const idString =
      "E8B60F67B36AD46B702C4E55A0336F-e0ec64969663c8e08.c-AAF54EF565CF293D29FAAE5820B002:1706086276878-fc0ecb10ff29282-637622EE285E392AD7082130E17F49";
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

export default ResetPasswordForm;
