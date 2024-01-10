import { AllHTMLAttributes } from "react";

export interface SectionCardsProps extends AllHTMLAttributes<HTMLDivElement> {
  handleShowModal?: () => void;
}
