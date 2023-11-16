import React from "react";
import PublicRoutes from "./routes/public-router/public-router";
import ReCAPTCHAComponent from "./components/reCAPTCHA";
import LoaderResponse from "./components/loaderResponse";

function App() {
  return (
    <>
      {/* <ReCAPTCHAComponent /> */}
      <LoaderResponse />
    </>
  );
}
export default App;
