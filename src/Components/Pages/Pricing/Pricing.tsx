import React, { useState } from "react";
import { EmptyCard } from "Components/Molecules/EmptyCard";

// Type defination
interface Props {}

// Component
const Pricing: React.FC<Props> = () => {
  // States
  const [, setShowModal] = useState<boolean>(false);

  // Data to display
  return (
    <EmptyCard
      message="No Pricing plan yet!"
      btnLabel="Create pricing plans"
      handleAction={() => setShowModal(true)}
    />
  );
};

export default Pricing;
