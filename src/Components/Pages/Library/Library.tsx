import React, { useEffect } from "react";

import { Libraries } from "Components/Organisms/Libraries";
import { EmptyCard } from "Components/Molecules/EmptyCard";
import { DashboardTemplate } from "Components/Templates/DashboardTemplate";

import useApi from "Utils/Hooks/useApi";
import endpoints from "Services/endpoints";

// Type defination
interface Props {}

// Component
const Library: React.FC<Props> = () => {
  // Hooks
  let { data, loading, sendRequest } = useApi<any>();
  data = (data && data?.data) || [];

  // Methods
  const getDocuments = async () => {
    await sendRequest("GET", endpoints.getDocumentEndpoint);
  };

  // Effects
  useEffect(() => {
    getDocuments();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Data to display
  return (
    <DashboardTemplate>
      <>
        {loading ? (
          <Libraries isLoading={loading} />
        ) : data && data?.length ? (
          <Libraries data={data} isLoading={loading} />
        ) : (
          <EmptyCard message="No materials yet!" btnLabel="Create materials" />
        )}
      </>
    </DashboardTemplate>
  );
};

export default Library;
