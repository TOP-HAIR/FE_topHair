import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoutes({ children }: { children: ReactNode }) {
  let userValid = true;
  const token = sessionStorage.getItem("dataLocal");
  if (token) {
    userValid = true;
  }

  return userValid ? children : <Navigate to="/" />;
}
