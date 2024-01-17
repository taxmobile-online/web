import React, { useEffect, useState } from "react";

import { SectionCards } from "Components/Organisms/SectionCards";
import { CreateSubSectionModal } from "Components/Molecules/Modals";
import { AdminDashboardChildTemplate } from "Components/Templates/AdminDashboardTemplate";

import { wait } from "Utils/Helper";
import useApi from "Utils/Hooks/useApi";
import endpoints from "Services/endpoints";
import useSectionStore from "Store/sections.store";

// Type defination
interface Props {}

// Component
const SubSections: React.FC<Props> = () => {
  // States
  const [showModal, setShowModal] = useState<boolean>(false);

  // Store
  const { setIsEdit, setSectionToEdit } = useSectionStore();

  // Hooks
  let { data, loading, error, sendRequest } = useApi<any>();
  let {
    data: sections,
    loading: loadingSections,
    sendRequest: sendSectionRequest,
  } = useApi<any>();

  data = data?.data || [];

  // Methods
  const getSubSections = async () => {
    await sendRequest("GET", endpoints.getSubSectionsEndpoint);
    setShowModal(false);
    setSectionToEdit!({});
    wait(() => setIsEdit!(false), 700);
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
        setShowModal={() => {
          setShowModal(false);
          wait(() => setIsEdit!(false), 700);
          setSectionToEdit!({});
        }}
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
