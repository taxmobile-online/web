import { AllHTMLAttributes } from "react";

export interface SectionCardsProps extends AllHTMLAttributes<HTMLDivElement> {
  error: any;
  isSub?: boolean;
  sections: Array<{}>;
  isLoading?: boolean;
  handleShowModal?: () => void;
  handleFormSuccess?: () => void;
}
