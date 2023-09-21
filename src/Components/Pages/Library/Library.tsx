import React from "react";

import { Card } from "Components/Organisms/Card";
import { DashboardTemplate } from "Components/Templates/DashboardTemplate";
import { LibraryDropdown } from "Components/Organisms/LibraryDropdown";
import { CenterModal } from "Components/Molecules/Modals";

// Type defination
interface Props {}

// Component
const Library: React.FC<Props> = () => {
  // Data to display
  return (
    <DashboardTemplate>
      <Card title="Library" subTitle="Manage your Taxmobile account.">
        <>
          <LibraryDropdown togglerList={["Books", "FIRS Circular"]} />
          <CenterModal handleCloseModal={() => {}} />
        </>
      </Card>
    </DashboardTemplate>
  );
};

export default Library;
