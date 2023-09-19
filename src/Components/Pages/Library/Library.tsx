import React from "react";

import { Card } from "Components/Organisms/Card";
import { DashboardTemplate } from "Components/Templates/DashboardTemplate";
import { LibraryDropdown } from "Components/Organisms/LibraryDropdown";

// Type defination
interface Props {}

// Component
const Library: React.FC<Props> = () => {
  // Data to display
  return (
    <DashboardTemplate>
      <Card title="Library" subTitle="Manage your Taxmobile account.">
        <LibraryDropdown togglerList={["Books", "FIRS Circular"]} />
      </Card>
    </DashboardTemplate>
  );
};

export default Library;
