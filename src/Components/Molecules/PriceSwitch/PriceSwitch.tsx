import React, { useState } from "react";

import { Switch, SwitchToggle, Wrapper } from "./style";

import Typography from "Components/Atoms/Typography";

// Variable
const ng = "NGN";
const us = "US$";

// Type defination
interface Props {}

// Component
const PriceSwitch: React.FC<Props> = () => {
  // States
  const [currency, setCurrency] = useState(ng);

  // Data to display
  return (
    <Wrapper>
      <Typography as="h6" className="h-8" text={ng} />
      <Switch
        onClick={() => setCurrency((currency) => (currency === ng ? us : ng))}
      >
        <SwitchToggle className={currency === us ? "mvv" : ""} />
      </Switch>
      <Typography as="h6" className="h-8" text={us} />
    </Wrapper>
  );
};

export default PriceSwitch;
