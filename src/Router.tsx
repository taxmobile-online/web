import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

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
import { ELibrary } from "Components/Pages/ELibrary";
import { AdminDashboard } from "Components/Pages/AdminDashboard";
import { AdminDashboardTemplate } from "Components/Templates/AdminDashboardTemplate";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Home />}
        errorElement={<h2>Can't find this page</h2>}
      />
      <Route path="/verify-email" element={<VerifyEmail />} />
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
      <Route path="admin-profile-settings" element={<AdminProfileSetting />} />
      <Route path="library" element={<Library />} />

      <Route path="admin" element={<AdminDashboardTemplate />}>
        <Route path="" element={<AdminDashboard />} />
        <Route path="payment-success" element={<PaymentSuccess />} />
        <Route path="e-library" element={<ELibrary />} />
      </Route>

      <Route path="billing" element={<Billing />} />
      <Route path="payment-success" element={<PaymentSuccess />} />
      <Route path="sign-in" element={<SignIn />} />
    </>
  )
);

export default Router;
