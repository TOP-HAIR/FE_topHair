import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "../../components/loader";
import HomePage from "../../pages/home-page/home-page";
import PrivateRoutes from "../private-router/private-router";
import ErrorPage404 from "../../components/ErrorPage404";
import HomeUserClient from "../../pages/home-user-client/home-user-client";
import ClientHomePage from "../../pages/home-user-client/components/home-page";
import ClientHomeEstablishment from "../../pages/home-user-client/components/home-establishment";
import ClientHomeEstablishmentList from "../../pages/home-user-client/components/home-establishment-list";
import EditEmployees from "../../pages/home-establishment/tabs/establishment-employees/employees-edit-page/employees-edit";
import EmployeesList from "../../pages/home-establishment/tabs/establishment-employees/employees-list/employees-list";
const HomeUserClientPage = lazy(
  () => import("../../pages/home-user-client/home-user-page")
);
const HomeList = lazy(
  () =>
    import(
      "../../pages/home-establishment/tabs/establishment-home/home-list/home-list"
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

  if (!window.location.href.includes("establishment")) {
    sessionStorage.clear();
  }

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
              <Route
                path="home"
                element={
                  <PrivateRoutes>
                    <HomeList />
                  </PrivateRoutes>
                }
              />
              <Route
                path="calendar"
                element={
                  <PrivateRoutes>
                    <HomeCalendar />
                  </PrivateRoutes>
                }
              />
              <Route
                path="reports"
                element={
                  <PrivateRoutes>
                    <HomeReports />
                  </PrivateRoutes>
                }
              >
                <Route
                  path="list"
                  element={
                    <PrivateRoutes>
                      <ReportList />
                    </PrivateRoutes>
                  }
                />
                <Route
                  path="dashboard/:idDashboard"
                  element={
                    <PrivateRoutes>
                      <ReportDashboard />
                    </PrivateRoutes>
                  }
                />
              </Route>
              <Route
                path="shop"
                element={
                  <PrivateRoutes>
                    <HomeShop />
                  </PrivateRoutes>
                }
              />
              <Route
                path="service"
                element={
                  <PrivateRoutes>
                    <HomeService />
                  </PrivateRoutes>
                }
              >
                <Route
                  path="list"
                  element={
                    <PrivateRoutes>
                      <ServiceList />
                    </PrivateRoutes>
                  }
                />
                <Route
                  path="edit"
                  element={
                    <PrivateRoutes>
                      <EditPageService />
                    </PrivateRoutes>
                  }
                />
                <Route
                  path="edit/:idServico"
                  element={
                    <PrivateRoutes>
                      <EditPageService />
                    </PrivateRoutes>
                  }
                />
              </Route>
              <Route
                path="comments"
                element={
                  <PrivateRoutes>
                    <HomeComments />
                  </PrivateRoutes>
                }
              />
              <Route
                path="employees"
                element={
                  <PrivateRoutes>
                    <HomeEmployees />
                  </PrivateRoutes>
                }
              >
                <Route
                  path="list"
                  element={
                    <PrivateRoutes>
                      <EmployeesList />
                    </PrivateRoutes>
                  }
                />
                <Route
                  path="add"
                  element={
                    <PrivateRoutes>
                      <EditEmployees />
                    </PrivateRoutes>
                  }
                />
                <Route
                  path="add/:idEmployee"
                  element={
                    <PrivateRoutes>
                      <EditEmployees />
                    </PrivateRoutes>
                  }
                />
              </Route>
            </Route>

            <Route path="client-page" element={<HomeUserClient />} />
            <Route path="client" element={<HomeUserClientPage />}>
              <Route path="home" element={<ClientHomePage />} />
              <Route
                path="establishment/:idEmpresa"
                element={<ClientHomeEstablishment />}
              />
              <Route path="list" element={<ClientHomeEstablishmentList />} />
              <Route
                path="list/:filtro"
                element={<ClientHomeEstablishmentList />}
              />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="form" element={<FormPage />} />
          </Routes>
        </BrowserRouter>
      )}
    </Suspense>
  );
}
