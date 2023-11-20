import React, { useState } from "react";
import { AdminDashboardChildTemplate } from "Components/Templates/AdminDashboardTemplate";
import { EmptyCard } from "Components/Molecules/EmptyCard";
import { CreateMaterialModal } from "Components/Molecules/Modals";

// Type defination
interface Props {}

// Component
const ELibrary: React.FC<Props> = () => {
  // States
  const [showModal, setShowModal] = useState<boolean>(false);

  // Data to display
  return (
    <AdminDashboardChildTemplate pageTile="E-library">
      <>
        <EmptyCard
          message="No materials yet!"
          btnLabel="Create materials"
          handleAction={() => setShowModal(true)}
        />

        <CreateMaterialModal
          showModal={showModal}
          setShowModal={() => setShowModal(false)}
        />
      </>
    </AdminDashboardChildTemplate>
  );
};

export default ELibrary;
