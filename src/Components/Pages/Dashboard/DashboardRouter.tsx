import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Dashboard from "./Dashboard";
import { AdminDashboard } from "../AdminDashboard";

interface Props {}
const DashboardRouter: React.FC<Props> = () => {
  return <AnimatedRoutes />;
};

export default DashboardRouter;

interface AnimatedProps {}
const AnimatedRoutes: React.FC<AnimatedProps> = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/dd" element={<Dashboard />} />
      </Routes>
    </AnimatePresence>
  );
};
