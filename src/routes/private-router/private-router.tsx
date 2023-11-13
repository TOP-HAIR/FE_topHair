import { ReactNode } from "react";
import React from "react";

import { Navigate } from "react-router-dom";

export default function PrivateRoutes({ children }: { children: ReactNode }) {
  const user = true;

  return user ? children : <Navigate to="/" />;
}
