import React from "react";
import AdminDashboardChildTemplate from "Components/Templates/AdminDashboardTemplate/AdminDashboardChildTemplate";

// Type defination
interface Props {}

// Component
const ELibrary: React.FC<Props> = () => {
  // Data to display
  return (
    <AdminDashboardChildTemplate pageTile="E-library"></AdminDashboardChildTemplate>
  );
};

export default ELibrary;
