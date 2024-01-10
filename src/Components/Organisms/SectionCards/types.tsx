import { AllHTMLAttributes } from "react";

export interface SectionCardsProps extends AllHTMLAttributes<HTMLDivElement> {
  handleShowModal?: () => void;
  handleFormSuccess?: () => void;
  sections: Array<{}>;
  isLoading?: boolean;
  isSub?: boolean;
  error: any;
}
