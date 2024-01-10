import React from "react";

import { Card } from "Components/Organisms/Card";
import { DashboardTemplate } from "Components/Templates/DashboardTemplate";
import { LibraryDropdown } from "Components/Organisms/LibraryDropdown";

// Type defination
interface Props {}

// Component
const Library: React.FC<Props> = () => {
  // States ***************** Tentative
  // const [show, setShow] = useState(true);
  // Data to display
  return (
    <DashboardTemplate>
      <Card title="Library">
        <>
          <LibraryDropdown togglerList={["Books", "FIRS Circular"]} />

          {/* <AnimatePresence>
            {show && <CenterModal handleCloseModal={() => setShow(false)} />}
          </AnimatePresence> */}
        </>
      </Card>
    </DashboardTemplate>
  );
};

export default Library;
