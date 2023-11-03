import React from "react";
// import { Wrapper } from './style'
import { AdminDashboardTemplate } from "Components/Templates/AdminDashboardTemplate";
import { Grid } from "Styles/layouts/Grid";
import { OverviewCard } from "Components/Molecules/OverviewCard";

// Type defination
interface Props {}

// Component
const AdminDashboard: React.FC<Props> = () => {
  // Data to display
  return (
    <AdminDashboardTemplate>
      <Grid $itemMinWidth={25.5} $columnGap={2.4} $rowGap={2}>
        <OverviewCard type="subscription" />
        <OverviewCard type="users" />
        <OverviewCard type="purchases" />
        <OverviewCard type="materials" />
      </Grid>
    </AdminDashboardTemplate>
  );
};

export default AdminDashboard;
