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
import { Sections } from "Components/Pages/Sections";
import { Subscribers } from "Components/Pages/Subscribers";
import { Pricing } from "Components/Pages/Pricing";
import { PricingSetup } from "Components/Pages/PricingSetup";
import { PricingTemplate } from "Components/Templates/PricingTemplate";
import { CouponCode } from "Components/Pages/CouponCode";
import { ProtectedRoute } from "Components/Atoms/ProtectedRoute";

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
      <Route
        path="invite-team"
        element={
          <ProtectedRoute>
            <InviteTeamMate />
          </ProtectedRoute>
        }
      />
      <Route path="forget-password" element={<ForgetPassword />} />
      <Route path="multi-user-signup" element={<MultiUserSignup />} />
      <Route path="multi-user-settings" element={<MultiUserSetting />} />
      <Route
        path="individual-user-settings"
        element={
          <ProtectedRoute>
            <IndividualUserSettings />
          </ProtectedRoute>
        }
      />
      <Route path="admin-account-settings" element={<AdminSettings />} />
      <Route path="admin-profile-settings" element={<AdminProfileSetting />} />
      <Route
        path="library"
        element={
          <ProtectedRoute>
            <Library />
          </ProtectedRoute>
        }
      />

      <Route path="admin" element={<AdminDashboardTemplate />}>
        <Route path="" element={<AdminDashboard />} />
        <Route path="payment-success" element={<PaymentSuccess />} />
        <Route path="e-library" element={<ELibrary />} />
        <Route path="sections" element={<Sections />} />
        <Route path="subscribers" element={<Subscribers />} />
        <Route path="coupon-code" element={<CouponCode />} />
        <Route path="pricing" element={<PricingTemplate />}>
          <Route path="" element={<Pricing />} />
          <Route path="set-up" element={<PricingSetup />} />
        </Route>
      </Route>

      <Route path="billing" element={<Billing />} />
      <Route path="payment-success" element={<PaymentSuccess />} />
      <Route path="sign-in" element={<SignIn />} />
    </>
  )
);

export default Router;
