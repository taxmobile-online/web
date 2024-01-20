import React from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "Store/auth.store";

interface Props {
  children: JSX.Element;
}
const ProtectedRoute: React.FC<Props> = ({ children }) => {
  // Store
  const { userData } = useAuthStore();
  console.log({ userData });

  if (!userData?.fullName) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
