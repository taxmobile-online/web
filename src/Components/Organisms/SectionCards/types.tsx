import { AllHTMLAttributes } from "react";

export interface SectionCardsProps extends AllHTMLAttributes<HTMLDivElement> {
  error: any;
  sections: Array<{}>;
  isLoading?: boolean;
  isSub?: boolean;
  handleShowModal?: () => void;
  handleFormSuccess?: () => void;
}
