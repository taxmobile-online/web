import React, { useEffect, useState } from "react";
import { AdminDashboardChildTemplate } from "Components/Templates/AdminDashboardTemplate";
import { EmptyCard } from "Components/Molecules/EmptyCard";
import { CreateMaterialModal } from "Components/Molecules/Modals";
import useApi from "Utils/Hooks/useApi";
import endpoints from "Services/endpoints";
import Book from "Components/Organisms/Libraries/Book";
import { Libraries } from "Components/Organisms/Libraries";

// Type defination
interface Props {}

// Component
const ELibrary: React.FC<Props> = () => {
  // States
  const [showModal, setShowModal] = useState<boolean>(false);

  // Hookd
  let { data, sendRequest } = useApi<any>();
  data = data?.data || [];

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
        {/* <EmptyCard
          message="No materials yet!"
          btnLabel="Create materials"
          handleAction={() => setShowModal(true)}
        /> */}

        <Libraries data={data} />

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
