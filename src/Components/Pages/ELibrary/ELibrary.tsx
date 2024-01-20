import React, { useEffect, useState } from "react";

import { EmptyCard } from "Components/Molecules/EmptyCard";
import { Libraries } from "Components/Organisms/Libraries";
import { CreateMaterialModal } from "Components/Molecules/Modals";
import { AdminDashboardChildTemplate } from "Components/Templates/AdminDashboardTemplate";

import useApi from "Utils/Hooks/useApi";
import endpoints from "Services/endpoints";

// Type defination
interface Props {}

// Component
const ELibrary: React.FC<Props> = () => {
  // States
  const [showModal, setShowModal] = useState<boolean>(false);

  // Hooks
  let { data, loading, sendRequest } = useApi<any>();
  data = (data && data?.data) || [];

  // Methods
  const getDocuments = async () => {
    await sendRequest("GET", endpoints.getDocumentEndpoint);
    setShowModal(false);
  };

  // Effects
  useEffect(() => {
    getDocuments();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Data to display
  return (
    <AdminDashboardChildTemplate pageTile="E-library">
      <>
        {loading ? (
          <Libraries isLoading={loading} />
        ) : data && data?.length ? (
          <Libraries
            data={data}
            isLoading={loading}
            handleAction={() => setShowModal(true)}
          />
        ) : (
          <EmptyCard
            message="No materials yet!"
            btnLabel="Create materials"
            handleAction={() => setShowModal(true)}
          />
        )}

        <CreateMaterialModal
          showModal={showModal}
          setShowModal={() => setShowModal(false)}
          handleFormSuccess={getDocuments}
        />
      </>
    </AdminDashboardChildTemplate>
  );
};

export default ELibrary;
