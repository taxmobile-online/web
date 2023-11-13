import React from "react";

import { Grid } from "Styles/layouts/Grid";
import { OverviewCard } from "Components/Molecules/OverviewCard";
import { Analysis } from "Components/Molecules/Analysis";
import AdminDashboardChildTemplate from "Components/Templates/AdminDashboardTemplate/AdminDashboardChildTemplate";

// Type defination
interface Props {}

// Component
const AdminDashboard: React.FC<Props> = () => {
  // Data to display
  return (
    <AdminDashboardChildTemplate pageTile="Dashboard">
      <>
        <Grid className="mb-30" $itemMinWidth={24} $columnGap={2.4} $rowGap={2}>
          <OverviewCard type="subscription" />
          <OverviewCard type="users" />
          <OverviewCard type="purchases" />
          <OverviewCard type="materials" />
        </Grid>

        <Analysis />
      </>
    </AdminDashboardChildTemplate>
  );
};

export default AdminDashboard;
