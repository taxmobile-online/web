import React from "react";
import { EmptyCard } from "Components/Molecules/EmptyCard";
import { useNavigate } from "react-router-dom";

// Type defination
interface Props {}

// Component
const Pricing: React.FC<Props> = () => {
  //   Hooks
  const navigate = useNavigate();

  // Data to display
  return (
    <EmptyCard
      message="No Pricing plan yet!"
      btnLabel="Create pricing plans"
      handleAction={() => navigate("/admin/pricing/set-up")}
    />
  );
};

export default Pricing;
