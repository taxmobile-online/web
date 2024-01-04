import { HTMLMotionProps } from "framer-motion";

export interface FormNotificationProps extends HTMLMotionProps<"div"> {
  visible?: any;
  setVisibility?: any;
  message: string;
  status: string;
}
