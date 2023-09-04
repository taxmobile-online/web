import React, { useState } from "react";

import { PriceSwitchStyle, Switch, SwitchToggle } from "./style";
import Typography from "Components/Atoms/Typography";

// Type defination
interface Props {}

// Variable
const ng = "NGN";
const us = "US$";

// Component
const PriceSwitch: React.FC<Props> = () => {
  // States
  const [currency, setCurrency] = useState(ng);

  // Data to display
  return (
    <PriceSwitchStyle>
      <Typography as="h6" className="h-8" text={ng} />
      <Switch
        onClick={() => setCurrency((currency) => (currency === ng ? us : ng))}
      >
        <SwitchToggle className={currency === us ? "mvv" : ""} />
      </Switch>
      <Typography as="h6" className="h-8" text={us} />
    </PriceSwitchStyle>
  );
};

export default PriceSwitch;
