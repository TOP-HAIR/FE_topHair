import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "../../components/loader";
import HomePage from "../../pages/home-page/home-page";
import PrivateRoutes from "../private-router/private-router";
import ErrorPage404 from "../../pages/ErrorPage404";
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
const HomeEmployees = lazy(
  () =>
    import(
      "../../pages/home-establishment/tabs/establishment-employees/establishment-employees"
    )
);
const HomeComments = lazy(
  () =>
    import(
      "../../pages/home-establishment/tabs/establishment-comments/comments-list/establishment-comments"
    )
);
const HomeHire = lazy(
  () =>
    import(
      "../../pages/home-establishment/tabs/establishment-hire/establishment-hire"
    )
);
const ReportDashboard = lazy(
  () =>
    import(
      "../../pages/home-establishment/tabs/establishment-reports/reports-dashboard/report-dashboard"
    )
);
const HomeEstablishment = lazy(
  () => import("../../pages/home-establishment/tabs/home-establishment")
);

const Login = lazy(
  () => import("../../pages/home-establishment/formLogin/login")
);

const FormPage = lazy(
  () => import("../../pages/home-establishment/formLogin/formPage")
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
            <Route path="*" element={<ErrorPage404 />} />
            <Route path="load" element={<Loader />} />

            <Route
              path="establishment"
              element={
                <PrivateRoutes>
                  <HomeEstablishment />
                </PrivateRoutes>
              }
            >
              <Route path="home" element={<HomeList />} />
              <Route path="calendar" element={<HomeCalendar />} />
              <Route path="reports" element={<HomeReports />}>
                <Route path="list" element={<ReportList />} />
                <Route path="dashboard/:id" element={<ReportDashboard />} />
              </Route>
              <Route path="shop" element={<HomeShop />} />
              <Route path="service" element={<HomeService />}>
                <Route path="list" element={<ServiceList />} />
                <Route path="edit" element={<EditPageService />} />
                <Route path="edit/:id" element={<EditPageService />} />
              </Route>
              <Route path="comments" element={<HomeComments />} />
              <Route path="employees" element={<HomeEmployees />} />
              <Route path="hireEmployees" element={<HomeHire />} />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="form" element={<FormPage />} />
          </Routes>
        </BrowserRouter>
      )}
    </Suspense>
  );
}
