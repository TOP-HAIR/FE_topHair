import React from "react";
import PublicRoutes from "./routes/public-router/public-router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <PublicRoutes />
      <ToastContainer />
    </>
  );
}
export default App;
