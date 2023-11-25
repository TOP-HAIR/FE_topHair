import React, { ReactNode, useState } from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoutes({ children }: { children: ReactNode }) {
  let userValid = false;
  const token = sessionStorage.getItem("dataLocal");
  if (token) {
    userValid = true;
  }

  return userValid ? children : <Navigate to="/" />;
}
