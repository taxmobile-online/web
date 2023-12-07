import React from "react";

export interface SignUpFormProps
  extends React.AllHTMLAttributes<HTMLDivElement> {}

export interface ValuesProps {
  fullName: string;
  email: string;
  phoneNumber: string;
}
