import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { Form } from "formik";
import { useNavigate } from "react-router-dom";

import Button from "Components/Atoms/Button";
import { FormField, InputField } from "Components/Molecules/FormFields";

import useAuthStore from "Store/auth.store";
import useApi from "Utils/Hooks/useApi";
import { SignUpFormProps } from "./types";

const validationSchema = yup.object().shape({
  fullName: yup.string().required().min(1).label("Full Name"),
  email: yup.string().required().min(1).label("Email"),
  phoneNumber: yup.string().required().min(1).label("Phone Number"),
});

// Component
const AdminProfileForm: React.FC<SignUpFormProps> = () => {
  // States
  const [reRender] = useState(false);

  // Hooks
  let { data, loading, error } = useApi<any>();
  const navigate = useNavigate();

  //   Store
  const { userData } = useAuthStore();

  // Methods
  const handleSubmit = async (values: any) => {
    const requestData = {
      password: values.password,
    };

    console.log({ requestData });

    // Send to backend
    // await sendRequest("POST", endpoints.resetPasswordApi, requestData);
    // setReRender(!reRender);

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

  //   Variables
  const initialValues = {
    fullName: userData.fullName || "",
    email: userData.email || "",
    phoneNumber: userData.phoneNumber || "",
  };

  // Data to display
  return (
    <FormField
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <InputField label="Full Name" name="fullName" />
        <InputField label="Email" name="email" />
        <InputField label="Phone Number" name="phoneNumber" />

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

export default AdminProfileForm;
