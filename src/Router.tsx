import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "Components/Pages/Home";
import VerifyEmail from "Components/Pages/VerifyEmail";
import { ResetPassword } from "Components/Pages/ResetPassword";
import { InviteTeamMate } from "Components/Pages/InviteTeamMate";
import { SignIn } from "Components/Pages/SignIn";
import { ForgetPassword } from "Components/Pages/ForgetPassword";

interface Props {}
const Router: React.FC<Props> = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default Router;

interface AnimatedProps {}
const AnimatedRoutes: React.FC<AnimatedProps> = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="verify-email" element={<VerifyEmail />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="invite-team" element={<InviteTeamMate />} />
        <Route path="forget-password" element={<ForgetPassword />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="details" element={""}>
          <Route path=":id" element={""} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
