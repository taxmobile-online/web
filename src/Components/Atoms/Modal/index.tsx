import React from "react";

import {
  RightModal,
  RightModalTop,
  RightModalBody,
  CouponAndPrice,
  RightModalDown,
  RightModalFormWrapper,
  CenterModal,
} from "./style";
import Typography from "../Typography";
import Button from "../Button";
import { Close } from "../SvgIcons";
import { Flex } from "Styles/layouts/Flex";
import Input from "../Input/Input";

// Type defination
interface Props {
  children?: JSX.Element | string;
  position?: "center" | "right" | "left";
  closeModal: () => void;
}

// Component
const Modal: React.FC<Props> = (props) => {
  // Props
  const { position, closeModal } = props;

  // Data to display
  if (position === "right")
    return (
      <RightModal
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 200, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.4, delay: 0.4 }}
      >
        <RightModalTop>
          <div>
            <Typography as="h4" className="h-12" text="Get Started" />
            <Typography as="p" className="h-13" text="Create your account" />
          </div>
          <Button onClick={closeModal}>
            <Close />
          </Button>
        </RightModalTop>
        <RightModalBody>
          <RightModalFormWrapper>
            <Input label="Full Name" name="fullName" />
            <Input label="Email" name="email" />
            <Input label="Phone Number" name="phone-number" />
          </RightModalFormWrapper>

          <CouponAndPrice className="mt-30">
            <div className="top">
              <Input
                label="Coupon code"
                bottomLabel="Have you been offered a discount?"
                labelClass="input-label--coupon"
                inputClass="input-ele--coupon"
                wrapperClass="rounded"
                noMargin
              />
              <Button className="btn btn-primary" value="Apply" />
            </div>

            <div className="bottom">
              <Flex gap="1rem" className="mb-20" flexRowJcBetweenAiCenter>
                <Typography as="h4" className="h-13" text="Pricing total" />
                <Typography as="h4" className="">
                  <>
                    <sup className="h-13">NGN</sup>{" "}
                    <span className="h-6">23,000</span>
                  </>
                </Typography>
              </Flex>
              <Flex gap="1rem" flexRowJcBetweenAiCenter>
                <Typography as="h4" className="h-13" text="Discount applied" />
                <Typography as="h4" className="">
                  <>
                    <sup className="h-13">NGN</sup>{" "}
                    <span className="h-6">0</span>
                  </>
                </Typography>
              </Flex>
            </div>
          </CouponAndPrice>
        </RightModalBody>
        <RightModalDown>
          <Button
            className="btn btn-full btn-primary btn-bg-color-2"
            value="Pay now"
          />
        </RightModalDown>
      </RightModal>
    );

  return <CenterModal></CenterModal>;
};

export default Modal;
