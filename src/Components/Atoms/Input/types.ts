import { AllHTMLAttributes, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  bottomLabel?: string;
  labelClass?: string;
  inputClass?: string;
  wrapperClass?: string;
  noMargin?: boolean;
  errorMessage?: any;
}
export interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  bottomLabel?: string;
  labelClass?: string;
  inputClass?: string;
  wrapperClass?: string;
  noMargin?: boolean;
  errorMessage?: any;

  options?: object[];
}

export interface CustomeFileTwoProps extends AllHTMLAttributes<HTMLDivElement> {
  label?: string;
  required?: boolean;
  pattern?: string;
  accept?: string;
  name?: string;
  noBottomLabel?: boolean;
  wrapperClassName?: string;
  handleChange: (e: any) => void;
}
