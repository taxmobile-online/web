import React from "react";

export interface SignUpFormProps extends React.AllHTMLAttributes<HTMLDivElement> {
  isAdmin?: boolean;
  handleAfterFormSubmit?: () => void;
}

export interface ValuesProps {
  fullName: string;
  email: string;
  phoneNumber: string;
}
