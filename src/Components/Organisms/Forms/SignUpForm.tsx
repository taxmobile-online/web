import React from "react";
import * as yup from "yup";
import { Form } from "formik";

import { FormField, InputField } from "Components/Molecules/FormFields";

// Type defination
interface Props {
  children?: any;
}

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
const SignUpForm: React.FC<Props> = ({ children }) => {
  // Data to display
  return (
    <FormField
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={() => console.log("Form submitted")}
    >
      <Form>
        <div style={{ paddingInline: "4rem" }}>
          <InputField label="Full Name" name="fullName" />
          <InputField label="Email" name="email" />
          <InputField label="Phone Number" name="phoneNumber" />
        </div>

        {children}
      </Form>
    </FormField>
  );
};

export default SignUpForm;
