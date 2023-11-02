import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "Components/Pages/Home";
import { SignIn } from "Components/Pages/SignIn";
import { Library } from "Components/Pages/Library";
import VerifyEmail from "Components/Pages/VerifyEmail";
import { ResetPassword } from "Components/Pages/ResetPassword";
import { AdminSettings } from "Components/Pages/AdminSettings";
import { ForgetPassword } from "Components/Pages/ForgetPassword";
import { InviteTeamMate } from "Components/Pages/InviteTeamMate";
import { MultiUserSignup } from "Components/Pages/MultiUserSignup";
import { MultiUserSetting } from "Components/Pages/MultiUserSetting";
import { AdminProfileSetting } from "Components/Pages/AdminProfileSetting";
import { Billing } from "Components/Pages/Billing";
import { PaymentSuccess } from "Components/Pages/PaymentSuccess";
import { IndividualUserSettings } from "Components/Pages/IndividualUserSettings";
import { SideNav } from "Components/Molecules/SideNav";

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
        <Route path="multi-user-signup" element={<MultiUserSignup />} />
        <Route path="multi-user-settings" element={<MultiUserSetting />} />
        <Route
          path="individual-user-settings"
          element={<IndividualUserSettings />}
        />
        <Route path="admin-account-settings" element={<AdminSettings />} />
        <Route
          path="admin-profile-settings"
          element={<AdminProfileSetting />}
        />
        <Route path="library" element={<Library />} />
        <Route path="dashboard" element={<SideNav />} />
        <Route path="billing" element={<Billing />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="sign-in" element={<SignIn />} />

        <Route path="details" element={""}>
          <Route path=":id" element={""} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};