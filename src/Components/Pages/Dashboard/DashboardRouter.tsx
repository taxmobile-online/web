import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import { ELibrary } from "../ELibrary";

interface Props {}
const DashboardRouter: React.FC<Props> = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardRouter />} />
      {/* </Route> */}
      <Route path="e-library" element={<ELibrary />} />
      <Route path="/dd" element={<Dashboard />} />
      <Route path="e-library" element={<ELibrary />} />
    </Routes>
  );
};

export default DashboardRouter;
