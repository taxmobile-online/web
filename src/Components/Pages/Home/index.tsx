import React from "react";

import Hero from "Components/Organisms/Hero";
import Typography from "Components/Atoms/Typography";
import Overlay from "Components/Atoms/Overlay";
import SubscriptionOption from "Components/Organisms/SubscriptionOption";
import Modal from "Components/Atoms/Modal";

interface Props {}
const Home: React.FC<Props> = () => {
  return (
    <>
      <Hero />
      <SubscriptionOption />
      <Typography as="h5" className="h-11 text-center mb-70">
        © 2023 Tax Mobile Store. All Rights Reserved.
      </Typography>
      <Overlay>
        <Modal position="right"></Modal>
      </Overlay>
    </>
  );
};

export default Home;
