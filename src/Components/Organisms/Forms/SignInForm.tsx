import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { Form } from "formik";

import { FormField, InputField } from "Components/Molecules/FormFields";
import { SignUpFormProps } from "./types";
import useAuthStore from "Store/auth.store";
import useApi from "Utils/Hooks/useApi";
import endpoints from "Services/endpoints";
import Button from "Components/Atoms/Button";
import { useNavigate } from "react-router-dom";
import httpService from "Services/httpService";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object().shape({
  email: yup.string().required().min(1).label("Email"),
});

// Component
const SignInForm: React.FC<SignUpFormProps> = () => {
  // States
  const [reRender, setReRender] = useState(false);

  //   Store
  const { setUserData } = useAuthStore();

  // Hooks
  let { data, loading, error, sendRequest } = useApi<any>();
  const navigate = useNavigate();

  // Methods
  const handleSubmit = async (values: any) => {
    const requestData = {
      email: values.email,
      password: values.password,
    };

    console.log({ requestData });

    // Send to backend
    await sendRequest("POST", endpoints.signInApi, requestData);
    setReRender(!reRender);

    // if (!error) actions.resetForm();
  };

  const handleAfterSubmit = () => {
    console.log({ data, error });

    if (data?.status && data?.status === "SUCCESS") {
      const userData = data?.data;
      httpService.setToken(userData.token);
      setUserData(userData);
      if (userData?.userId.includes("PERSONAL")) navigate("/library");
      else navigate("/invite-team");
    }
    // if (data?.status && data?.status === "SUCCESS") navigate("/sign-in");
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
        <InputField label="Email" name="email" type="email" />
        <InputField label="Password" name="password" type="password" />

        <Button
          disabled={loading}
          type="submit"
          className="btn btn-full btn-primary btn-bg-color-2 mt-35"
          value={loading ? "Signing in..." : "Sign in"}
        />
      </Form>
    </FormField>
  );
};

export default SignInForm;
