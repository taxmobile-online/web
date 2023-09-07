import React from "react";
import {
  RightModal,
  RightModalTop,
  RightModalBody,
  CouponAndPrice,
  RightModalDown,
} from "./style";
import Typography from "../Typography";
import Button from "../Button";
import { Close } from "../SvgIcons";
import { Flex } from "Styles/layouts/Flex";

// Type defination
interface Props {
  children?: JSX.Element | string;
  position?: "center" | "right" | "left";
}

// Component
const Modal: React.FC<Props> = (props) => {
  // Props
  const { position } = props;

  // Data to display
  if (position === "right")
    return (
      <RightModal>
        <RightModalTop>
          <div>
            <Typography as="h4" className="h-12" text="Get Started" />
            <Typography as="p" className="h-13" text="Create your account" />
          </div>
          <Button>
            <Close />
          </Button>
        </RightModalTop>
        <RightModalBody>
          <CouponAndPrice>
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
  return <></>;
};

export default Modal;
