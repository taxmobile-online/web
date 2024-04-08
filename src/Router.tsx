import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Read } from "Components/Pages/Read";
import { SignIn } from "Components/Pages/SignIn";
import { Library } from "Components/Pages/Library";
import { Pricing } from "Components/Pages/Pricing";
import { Billing } from "Components/Pages/Billing";
import { ELibrary } from "Components/Pages/ELibrary";
import { Sections } from "Components/Pages/Sections";
import Home from "Components/Pages/Home";
import VerifyEmail from "Components/Pages/VerifyEmail";
import { CouponCode } from "Components/Pages/CouponCode";
import { SubSections } from "Components/Pages/SubSections";
import { Subscribers } from "Components/Pages/Subscribers";
import { PricingSetup } from "Components/Pages/PricingSetup";
import { ResetPassword } from "Components/Pages/ResetPassword";
import { AdminSettings } from "Components/Pages/AdminSettings";
import { ForgetPassword } from "Components/Pages/ForgetPassword";
import { InviteTeamMate } from "Components/Pages/InviteTeamMate";
import { ProtectedRoute } from "Components/Atoms/ProtectedRoute";
import { PaymentSuccess } from "Components/Pages/PaymentSuccess";
import { AdminDashboard } from "Components/Pages/AdminDashboard";
import { MultiUserSignup } from "Components/Pages/MultiUserSignup";
import { MultiUserSetting } from "Components/Pages/MultiUserSetting";
import { PricingTemplate } from "Components/Templates/PricingTemplate";
import { AdminProfileSetting } from "Components/Pages/AdminProfileSetting";
import { IndividualUserSettings } from "Components/Pages/IndividualUserSettings";
import { AdminDashboardTemplate } from "Components/Templates/AdminDashboardTemplate";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Home />}
        errorElement={<h2>Can't find this page</h2>}
      />
      <Route path="verify-email" element={<VerifyEmail />} />
      <Route path="reset-password" element={<ResetPassword />} />
      <Route path="forget-password" element={<ForgetPassword />} />
      <Route path="multi-user-signup" element={<MultiUserSignup />} />
      <Route path="multi-user-settings" element={<MultiUserSetting />} />
      <Route path="admin/sign-in" element={<SignIn isAdmin />} />
      <Route path="sign-in" element={<SignIn />} />

      <Route
        path="invite-team"
        element={
          <ProtectedRoute>
            <InviteTeamMate />
          </ProtectedRoute>
        }
      />
      <Route
        path="individual-user-settings"
        element={
          <ProtectedRoute>
            <IndividualUserSettings />
          </ProtectedRoute>
        }
      />
      <Route
        path="admin-account-settings"
        element={
          <ProtectedRoute>
            <AdminSettings />
          </ProtectedRoute>
        }
      />
      <Route
        path="admin-profile-settings"
        element={
          <ProtectedRoute>
            <AdminProfileSetting />
          </ProtectedRoute>
        }
      />
      <Route
        path="library"
        element={
          <ProtectedRoute>
            <Library />
          </ProtectedRoute>
        }
      />

      <Route
        path="book/:id/:token"
        element={
          <ProtectedRoute>
            <Read />
          </ProtectedRoute>
        }
      />

      <Route path="admin" element={<AdminDashboardTemplate />}>
        <Route path="" element={<AdminDashboard />} />
        <Route path="payment-success" element={<PaymentSuccess />} />
        <Route
          path="e-library"
          element={
            <ProtectedRoute>
              <ELibrary />
            </ProtectedRoute>
          }
        />
        <Route
          path="sections"
          element={
            <ProtectedRoute>
              <Sections />
            </ProtectedRoute>
          }
        />
        <Route
          path="sub-sections"
          element={
            <ProtectedRoute>
              <SubSections />
            </ProtectedRoute>
          }
        />
        <Route
          path="subscribers"
          element={
            <ProtectedRoute>
              <Subscribers />
            </ProtectedRoute>
          }
        />
        <Route
          path="coupon-code"
          element={
            <ProtectedRoute>
              <CouponCode />
            </ProtectedRoute>
          }
        />
        <Route
          path="pricing"
          element={
            <ProtectedRoute>
              <PricingTemplate />
            </ProtectedRoute>
          }
        >
          <Route path="" element={<Pricing />} />
          <Route path="set-up" element={<PricingSetup />} />
        </Route>
      </Route>

      <Route
        path="billing"
        element={
          <ProtectedRoute>
            <Billing />
          </ProtectedRoute>
        }
      />
      <Route
        path="payment-success"
        element={
          <ProtectedRoute>
            <PaymentSuccess />
          </ProtectedRoute>
        }
      />
    </>
  )
);

export default Router;
