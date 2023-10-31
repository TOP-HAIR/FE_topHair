import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "../../components/loader";
import HomePage from "../../pages/home-page/home-page";
import { ChakraProvider } from "@chakra-ui/react";
import PrivateRoutes from "../private-router/private-router";

const HomeEstablishment = lazy(
  () => import("../../pages/home-establishment/tabs/home-establishment")
);
const HomeList = lazy(
  () =>
    import(
      "../../pages/home-establishment/tabs/establishment-home/home-list/components/home-list"
    )
);
const HomeCalendar = lazy(
  () =>
    import(
      "../../pages/home-establishment/tabs/establishment-calendar/establishment-calendar"
    )
);
const HomeReports = lazy(
  () =>
    import(
      "../../pages/home-establishment/tabs/establishment-reports/establishment-reports"
    )
);
const ReportList = lazy(
  () =>
    import(
      "../../pages/home-establishment/tabs/establishment-reports/reports-list/report-list"
    )
);
const ReportDashboard = lazy(
  () =>
    import(
      "../../pages/home-establishment/tabs/establishment-reports/reports-dashboard/report-dashboard"
    )
);
const HomeShop = lazy(
  () =>
    import(
      "../../pages/home-establishment/tabs/establishment-shop/establishment-shop"
    )
);
const HomeService = lazy(
  () =>
    import(
      "../../pages/home-establishment/tabs/establishment-service/establishment-service"
    )
);
const ServiceList = lazy(
  () =>
    import(
      "../../pages/home-establishment/tabs/establishment-service/service-list/service-list"
    )
);
const EditPageService = lazy(
  () =>
    import(
      "../../pages/home-establishment/tabs/establishment-service/service-edit-page/service-edit"
    )
);
const HomeComments = lazy(
  () =>
    import(
      "../../pages/home-establishment/tabs/establishment-comments/comments-list/establishment-comments"
    )
);
const HomeEmployees = lazy(
  () =>
    import(
      "../../pages/home-establishment/tabs/establishment-employees/establishment-employees"
    )
);
const HomeHire = lazy(
  () =>
    import(
      "../../pages/home-establishment/tabs/establishment-hire/establishment-hire"
    )
);
const RegisterEstablishment = lazy(
  () =>
    import(
      "../../pages/home-establishment/login/components/registerEstablishment"
    )
);
const Loginpage = lazy(
  () => import("../../pages/home-establishment/login/loginPage")
);

export default function PublicRoutes() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Suspense fallback={<Loader />}>
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/load" element={<Loader />} />
            <Route
              path="/establishment"
              element={
                <PrivateRoutes>
                  <HomeEstablishment />
                </PrivateRoutes>
              }
            >
              <Route path="/establishment/home" element={<HomeList />} />
              <Route
                path="/establishment/calendar"
                element={<HomeCalendar />}
              />
              <Route path="/establishment/reports" element={<HomeReports />}>
                <Route path="/establishment/reports" element={<ReportList />} />
                <Route
                  path="/establishment/reports/dashboard"
                  element={<ReportDashboard />}
                />
              </Route>
              <Route path="/establishment/shop" element={<HomeShop />} />
              <Route path="/establishment/service" element={<HomeService />}>
                <Route
                  path="/establishment/service"
                  element={<ServiceList />}
                />
                <Route
                  path="/establishment/service/edit/:id"
                  element={<EditPageService />}
                />
              </Route>
              <Route
                path="/establishment/comments"
                element={<HomeComments />}
              />
              <Route
                path="/establishment/employees"
                element={<HomeEmployees />}
              />
              <Route
                path="/establishment/hireEmployees"
                element={<HomeHire />}
              />
            </Route>
            <Route path="/login" element={<Loginpage />} />
            <Route
              path="/register"
              element={
                <ChakraProvider>
                  <RegisterEstablishment />
                </ChakraProvider>
              }
            />
          </Routes>
        </BrowserRouter>
      )}
    </Suspense>
  );
}
