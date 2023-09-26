import React, { useState } from "react";

import { Card } from "Components/Organisms/Card";
import { DashboardTemplate } from "Components/Templates/DashboardTemplate";
import { LibraryDropdown } from "Components/Organisms/LibraryDropdown";
import { CenterModal } from "Components/Molecules/Modals";
import { AnimatePresence } from "framer-motion";

// Type defination
interface Props {}

// Component
const Library: React.FC<Props> = () => {
  // States ***************** Tentative
  const [show, setShow] = useState(true);
  // Data to display
  return (
    <DashboardTemplate>
      <Card title="Library" subTitle="Manage your Taxmobile account.">
        <>
          <LibraryDropdown togglerList={["Books", "FIRS Circular"]} />

          <AnimatePresence>
            {show && <CenterModal handleCloseModal={() => setShow(false)} />}
          </AnimatePresence>
        </>
      </Card>
    </DashboardTemplate>
  );
};

export default Library;
