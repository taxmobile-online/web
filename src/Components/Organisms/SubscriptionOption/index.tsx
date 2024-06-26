import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { Container, Wrapper } from "./style";

import Plans from "./Plans";
import Typography from "Components/Atoms/Typography";
import { RightModal } from "Components/Molecules/Modals";
import { PlanOption } from "Components/Molecules/PlanOption";
import { PriceSwitch } from "Components/Molecules/PriceSwitch";

interface Props {}
const SubscriptionOption: React.FC<Props> = () => {
  // State
  const [show, setShow] = useState<boolean>(false);

  // Methods
  const handleShowModal = () => {
    setShow(!show);
  };
  const handleCloseModal = () => {
    setShow(false);
  };

  // Data to display
  return (
    <>
      <Wrapper id="sub-option">
        <Container>
          <Typography
            as="h3"
            text="Choose A Subscription Plan"
            className="h-7 text-center max-width-430 mx-auto mb-50"
          />
          <PriceSwitch />
          <PlanOption className="mt-40 mb-50" />
          <Plans handleShowModal={() => handleShowModal()} />
        </Container>
      </Wrapper>

      <AnimatePresence>
        {show && <RightModal closeModal={handleCloseModal} />}
      </AnimatePresence>
    </>
  );
};

export default SubscriptionOption;
