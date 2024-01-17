import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { Form } from "formik";

import { FormField, InputField } from "Components/Molecules/FormFields";
import { SignUpFormProps, ValuesProps } from "./types";
import useAuthStore from "Store/auth.store";
import useApi from "Utils/Hooks/useApi";
import endpoints from "Services/endpoints";
import { RightModalDown } from "./style";
import Button from "Components/Atoms/Button";
import { useNavigate } from "react-router-dom";

const initialValues = {
  fullName: "",
  email: "",
  phoneNumber: "",
};

const validationSchema = yup.object().shape({
  fullName: yup.string().required().min(1).label("Full name"),
  email: yup.string().email().required().label("Email"),
  phoneNumber: yup.string().required().label("Phone number"),
});

// Component
const SignUpForm: React.FC<SignUpFormProps> = ({ children }) => {
  // States
  const [reRender, setReRender] = useState(false);

  // Hooks
  let { data, loading, sendRequest } = useApi<any>();
  const navigate = useNavigate();

  // Store
  const { accountType, planDuration, transactionId } = useAuthStore();

  // Methods
  const handleSubmit = async (values: ValuesProps) => {
    const requestData = { ...values, accountType, planDuration, transactionId };

    // Send to backend
    await sendRequest("POST", endpoints.registerUserApi, requestData);
    setReRender(!reRender);

    // if (!error) actions.resetForm();
  };

  const handleAfterSubmit = () => {
    // if (!formSubmitted) return;
    if (data?.status && data?.status === "SUCCESS") navigate("/verify-email");
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
        <div style={{ paddingInline: "4rem" }}>
          <InputField label="Full Name" name="fullName" />
          <InputField label="Email" name="email" />
          <InputField label="Phone Number" name="phoneNumber" />
        </div>

        {children}

        <RightModalDown>
          <Button
            disabled={loading}
            type="submit"
            className="btn btn-full btn-primary btn-bg-color-2"
            value="Sign Up"
          />
        </RightModalDown>
      </Form>
    </FormField>
  );
};

export default SignUpForm;
