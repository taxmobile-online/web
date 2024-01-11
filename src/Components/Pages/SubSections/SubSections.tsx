import React, { useEffect, useState } from "react";
import { AdminDashboardChildTemplate } from "Components/Templates/AdminDashboardTemplate";

import { CreateSubSectionModal } from "Components/Molecules/Modals";
import useApi from "Utils/Hooks/useApi";
import { SectionCards } from "Components/Organisms/SectionCards";
import endpoints from "Services/endpoints";

// Type defination
interface Props {}

// Component
const SubSections: React.FC<Props> = () => {
  // States
  const [showModal, setShowModal] = useState<boolean>(false);

  // Hooks
  let { data, loading, error, sendRequest } = useApi<any>();
  let {
    data: sections,
    loading: loadingSections,
    error: sectionsError,
    sendRequest: sendSectionRequest,
  } = useApi<any>();

  data = data?.data || [];

  // Methods
  const getSubSections = async () => {
    await sendRequest("GET", endpoints.getSubSectionsEndpoint);
    setShowModal(false);
  };

  const getSections = async () => {
    await sendSectionRequest("GET", endpoints.getSectionsEndpoint);
  };

  // Effects
  useEffect(() => {
    getSubSections();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Data to display

  return (
    <>
      <AdminDashboardChildTemplate pageTile="Sub Sections">
        <SectionCards
          isLoading={loading}
          sections={data}
          error={error}
          handleShowModal={() => setShowModal(true)}
          handleFormSuccess={getSubSections}
          isSub
        />
      </AdminDashboardChildTemplate>

      <CreateSubSectionModal
        showModal={showModal}
        setShowModal={() => setShowModal(false)}
        handleFormSuccess={getSubSections}
        isLoading={loading}
        formDependentApi={async () => await getSections()}
        formDependentData={sections?.data || []}
        formDependentDataLoading={loadingSections}
      />
    </>
  );
};

export default SubSections;
