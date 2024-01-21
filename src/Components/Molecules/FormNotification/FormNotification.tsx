import React, { useRef } from "react";
import { AnimatePresence } from "framer-motion";

import { Wrapper } from "./style";

import Typography from "Components/Atoms/Typography";
import { NotificationCheckIcon } from "Components/Atoms/SvgIcons";

import { FormNotificationProps } from "./types";
import useOnClickOutside from "Utils/Hooks/useOnClickOutside";

// Component
const FormNotification: React.FC<FormNotificationProps> = (props) => {
  // Props
  const { setVisibility, visible, message, status, className, ...otherProps } =
    props;
  // Ref
  const ref = useRef<any>();

  // Hooks
  useOnClickOutside(ref, () => setVisibility!());

  // Data to display
  return (
    <AnimatePresence>
      {visible && (
        <Wrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          exit={{ scale: 0.9, opacity: 0 }}
          ref={ref}
          className={`${status === "ERROR" ? "error" : ""} ${className}`}
          {...otherProps}
        >
          <NotificationCheckIcon />
          <Typography as="h5" className="h-40" text={message || ""} />
        </Wrapper>
      )}
    </AnimatePresence>
  );
};

export default FormNotification;
