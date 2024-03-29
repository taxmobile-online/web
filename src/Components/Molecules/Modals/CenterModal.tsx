import React from "react";

import {
  CenterModalBody,
  CenterModalFooter,
  CenterModalTop,
  CenterModalWrapper,
} from "./style";
import Button from "Components/Atoms/Button";
import Overlay from "Components/Atoms/Overlay";
import Typography from "Components/Atoms/Typography";
import { CloseCircle, Warning } from "Components/Atoms/SvgIcons";

import { ModalsProps } from "./types";

// Component
const CenterModal: React.FC<ModalsProps> = (props) => {
  // Props
  const {
    children,
    handleCloseModal,
    handleYes,
    handleNo,
    headerType,
    headerTitle,
    messageType = "ok",
    yesText = "Delete",
    title = "Delete 1 member",
    subTitle = "Are you sure you want to delete “michael john” ?",
    hideFooter,
    disabledYesBtn,
  } = props;

  // Data to display
  return (
    <Overlay position="center">
      <CenterModalWrapper
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.4, delay: 0.4 }}
      >
        <CenterModalTop>
          {headerType === "text" ? (
            <div className="right">
              <Typography as="h6" className="h-22" text={headerTitle} />
            </div>
          ) : (
            <div className="right right-center">
              <Warning className="ml-40" width={27} height={27} />
            </div>
          )}
          <Button onClick={handleCloseModal}>
            <CloseCircle width={30} height={30} />
          </Button>
        </CenterModalTop>

        <CenterModalBody>
          {children ? (
            <>{children}</>
          ) : (
            <>
              {title && <Typography as="h6" className="h-15" text={title} />}
              {subTitle && (
                <Typography as="p" className="p-11" text={subTitle} />
              )}
            </>
          )}
        </CenterModalBody>

        {!hideFooter && (
          <CenterModalFooter>
            <Button
              className={`${
                messageType === "warning" ? "btn-color-18" : "btn-color-primary"
              }`}
              onClick={handleNo || handleCloseModal}
              value="Cancel"
            />
            <Button
              onClick={handleYes}
              className={`btn btn-primary btn-md ${
                messageType === "warning" ? "btn-bg-color-18" : ""
              }`}
              value={yesText}
              disabled={disabledYesBtn}
            />
          </CenterModalFooter>
        )}
      </CenterModalWrapper>
    </Overlay>
  );
};

export default CenterModal;
