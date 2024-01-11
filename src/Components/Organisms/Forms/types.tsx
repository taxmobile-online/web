import React from "react";

export interface SignUpFormProps
  extends React.AllHTMLAttributes<HTMLDivElement> {
  isAdmin?: boolean;
  handleAfterFormSubmit?: () => void;

  options?: Array<any>;
}

export interface ValuesProps {
  fullName: string;
  email: string;
  phoneNumber: string;
}
