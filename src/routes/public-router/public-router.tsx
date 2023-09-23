import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "../../components/loader";
import HomePage from "../../pages/home-page/home-page";

import PrivateRoutes from "../private-router/private-router";
import HomeEstablishment from "../../pages/home-establishment/tabs/home-establishment";

export default function PublicRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/load" element={<Loader />} />
        <Route
          path="/home-estabelecimento"
          element={
            <PrivateRoutes>
              <HomeEstablishment />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
