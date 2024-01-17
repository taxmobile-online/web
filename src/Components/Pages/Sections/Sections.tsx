import React, { useEffect, useState } from "react";

import { CreateSectionModal } from "Components/Molecules/Modals";
import { SectionCards } from "Components/Organisms/SectionCards";
import { AdminDashboardChildTemplate } from "Components/Templates/AdminDashboardTemplate";

import { wait } from "Utils/Helper";
import useApi from "Utils/Hooks/useApi";
import useSectionStore from "Store/sections.store";

// Type defination
interface Props {}

// Component
const Sections: React.FC<Props> = () => {
  // States
  const [showModal, setShowModal] = useState<boolean>(false);

  // Store
  const { setIsEdit, setSectionToEdit } = useSectionStore();

  // Hooks
  let { data, loading, error, sendRequest } = useApi<any>();

  data = data?.data || [];

  // Methods
  const getSections = async () => {
    await sendRequest("GET", "/section");
    setShowModal(false);
    setSectionToEdit!({});
    wait(() => setIsEdit!(false), 700);
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
        setShowModal={() => {
          setShowModal(false);
          wait(() => setIsEdit!(false), 700);
          setSectionToEdit!({});
        }}
        handleFormSuccess={getSections}
        isLoading={loading}
      />
    </>
  );
};

export default Sections;
