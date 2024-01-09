import { AllHTMLAttributes } from "react";

export interface ModalsProps extends AllHTMLAttributes<HTMLDivElement> {
  handleCloseModal: () => void;
  handleYes?: () => void;
  handleNo?: () => void;
  yesText?: string;
  title?: string;
  subTitle?: string;
  children?: JSX.Element;
  messageType?: "ok" | "warning";
  headerType?: "warning" | "text";
  headerTitle?: string;
  disabledYesBtn?: boolean;

  hideFooter?: boolean;
}
