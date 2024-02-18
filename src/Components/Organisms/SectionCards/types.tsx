import { AllHTMLAttributes } from "react";

export interface SectionCardsProps extends AllHTMLAttributes<HTMLDivElement> {
  isSub?: boolean;
  error: any;
  sections: Array<{}>;
  isLoading?: boolean;
  handleShowModal?: () => void;
  handleFormSuccess?: () => void;
}
