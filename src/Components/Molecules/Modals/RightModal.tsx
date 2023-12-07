import React from "react";

import Overlay from "Components/Atoms/Overlay";
import {
  CouponAndPrice,
  RightModalBody,
  RightModalFormWrapper,
  RightModalTop,
  RightModalWrapper,
} from "./style";
import Typography from "Components/Atoms/Typography";
import Button from "Components/Atoms/Button";
import { Close } from "Components/Atoms/SvgIcons";
import Input from "Components/Atoms/Input/Input";
import { Flex } from "Styles/layouts/Flex";
import { SignUpForm } from "Components/Organisms/Forms";

// Type defination
interface Props {
  closeModal: () => void;
}

// Component
const RightModal: React.FC<Props> = (props) => {
  // Props
  const { closeModal } = props;

  // Data to display
  return (
    <Overlay>
      <RightModalWrapper
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
            <SignUpForm>
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
                  <Flex $gap="1rem" className="mb-20" $flexRowJcBetweenAiCenter>
                    <Typography as="h4" className="h-13" text="Pricing total" />
                    <Typography as="h4" className="">
                      <>
                        <sup className="h-13">NGN</sup>{" "}
                        <span className="h-6">23,000</span>
                      </>
                    </Typography>
                  </Flex>
                  <Flex $gap="1rem" $flexRowJcBetweenAiCenter>
                    <Typography
                      as="h4"
                      className="h-13"
                      text="Discount applied"
                    />
                    <Typography as="h4" className="">
                      <>
                        <sup className="h-13">NGN</sup>{" "}
                        <span className="h-6">0</span>
                      </>
                    </Typography>
                  </Flex>
                </div>
              </CouponAndPrice>
              {/* <RightModalDown>
                <Button
                  type="submit"
                  className="btn btn-full btn-primary btn-bg-color-2"
                  value="Sign Up"
                />
              </RightModalDown> */}
            </SignUpForm>
          </RightModalFormWrapper>
        </RightModalBody>
      </RightModalWrapper>
    </Overlay>
  );
};

export default RightModal;
