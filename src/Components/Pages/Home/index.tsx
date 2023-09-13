import React from "react";

import Hero from "Components/Organisms/Hero";
import Typography from "Components/Atoms/Typography";
import SubscriptionOption from "Components/Organisms/SubscriptionOption";

interface Props {}
const Home: React.FC<Props> = () => {
  return (
    <>
      <Hero />
      <SubscriptionOption />
      <Typography as="h5" className="h-11 text-center mb-70">
        © 2023 Tax Mobile Store. All Rights Reserved.
      </Typography>
    </>
  );
};

export default Home;
