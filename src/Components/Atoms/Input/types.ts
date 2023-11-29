import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  bottomLabel?: string;
  labelClass?: string;
  inputClass?: string;
  wrapperClass?: string;
  noMargin?: boolean;
  errorMessage?: any;
}
