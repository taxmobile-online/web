import React, { useState } from "react";
import { Container, Wrapper } from "./style";
import Typography from "Components/Atoms/Typography";
import Plans from "./Plans";
import { PriceSwitch } from "Components/Molecules/PriceSwitch";
import { PlanOption } from "Components/Molecules/PlanOption";
import { AnimatePresence } from "framer-motion";
import { RightModal } from "Components/Molecules/Modals";

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
            className="h-7 text-center max-width-430 mx-auto mb-50"
            text="Choose A Subscription Plan"
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
