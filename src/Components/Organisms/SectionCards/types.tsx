import { AllHTMLAttributes } from "react";

export interface SectionCardsProps extends AllHTMLAttributes<HTMLDivElement> {
  handleShowModal?: () => void;
  handleFormSuccess?: () => void;
  sections: Array<{}>;
  isLoading?: boolean;
  error: any;
}
