import React from "react";

import Hero from "Components/Organisms/Hero";
import SubscriptionOption from "Components/Templates/SubscriptionOption";

interface Props {}
const Home: React.FC<Props> = () => {
  return (
    <>
      <Hero />
      <SubscriptionOption />
    </>
  );
};

export default Home;
