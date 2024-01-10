import React, { useEffect, useState } from "react";
import { AdminDashboardChildTemplate } from "Components/Templates/AdminDashboardTemplate";

import { CreateSectionModal } from "Components/Molecules/Modals";
import useApi from "Utils/Hooks/useApi";
import { SectionCards } from "Components/Organisms/SectionCards";

// Type defination
interface Props {}

// Component
const SubSections: React.FC<Props> = () => {
  // States
  const [showModal, setShowModal] = useState<boolean>(false);

  // Hooks
  let { data, loading, error, sendRequest } = useApi<any>();

  data = data?.data || [];

  // Methods
  const getSections = async () => {
    await sendRequest("GET", "/section");
    setShowModal(false);
  };

  // Effects
  useEffect(() => {
    getSections();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Data to display

  return (
    <>
      <AdminDashboardChildTemplate pageTile="Sections">
        <SectionCards
          isLoading={loading}
          sections={data}
          error={error}
          handleShowModal={() => setShowModal(true)}
          handleFormSuccess={getSections}
        />
      </AdminDashboardChildTemplate>

      <CreateSectionModal
        showModal={showModal}
        setShowModal={() => setShowModal(false)}
        handleFormSuccess={getSections}
        isLoading={loading}
      />
    </>
  );
};

export default SubSections;
