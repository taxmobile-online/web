export interface FormFieldProps {
  children?: any;
  onSubmit?: any;
  validationSchema?: any;
  initialValues: any;
}

export interface InputFieldProps
  extends React.HTMLAttributes<HTMLInputElement> {
  name?: any;
  value?: any;
  label?: any;
  type?: string;
}

export interface SelectFieldProps
  extends React.HTMLAttributes<HTMLSelectElement> {
  name?: any;
  value?: any;
  label?: any;
  type?: string;
  options?: Array<any>;
}
