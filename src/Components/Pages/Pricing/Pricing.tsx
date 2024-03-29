import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useApi from "Utils/Hooks/useApi";
import endpoints from "Services/endpoints";
import usePageTitle from "Utils/Hooks/usePageTitle";

import { EmptyCard } from "Components/Molecules/EmptyCard";

// Type defination
interface Props {}

// Component
const Pricing: React.FC<Props> = () => {
  //   Hooks
  usePageTitle("Pricing");
  const navigate = useNavigate();

  // Api
  const { data, loading, sendRequest } = useApi<any>();

  // Methods
  const getPricings = async () => {
    await sendRequest("GET", endpoints.pricingEndpoint);
  };

  // Effects
  useEffect(() => {
    getPricings();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
