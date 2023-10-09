import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "../../components/loader";
import HomePage from "../../pages/home-page/home-page";
import ChakraProvider from "@chakra-ui/react";
import PrivateRoutes from "../private-router/private-router";
import HomeEstablishment from "../../pages/home-establishment/tabs/home-establishment";
import HomeList from "../../pages/home-establishment/tabs/establishment-home/home-list/components/home-list";
import HomeCalendar from "../../pages/home-establishment/tabs/establishment-calendar/establishment-calendar";
import HomeReports from "../../pages/home-establishment/tabs/establishment-reports/establishment-reports";
import HomeShop from "../../pages/home-establishment/tabs/establishment-shop/establishment-shop";
import HomeService from "../../pages/home-establishment/tabs/establishment-service/establishment-service";
import HomeComments from "../../pages/home-establishment/tabs/establishment-comments/comments-list/establishment-comments";
import HomeEmployees from "../../pages/home-establishment/tabs/establishment-employees/establishment-employees";
import ReportList from "../../pages/home-establishment/tabs/establishment-reports/reports-list/report-list";
import ReportDashboard from "../../pages/home-establishment/tabs/establishment-reports/reports-dashboard/report-dashboard";
import ServiceList from "../../pages/home-establishment/tabs/establishment-service/service-list/service-list";
import EditPageService from "../../pages/home-establishment/tabs/establishment-service/service-edit-page/service-edit";
import HomeHire from "../../pages/home-establishment/tabs/establishment-hire/establishment-hire";
import RegisterEstablishment from "../../pages/home-establishment/login/components/registerEstablishment";

export default function PublicRoutes() {
  return (
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
          <Route
            path="/establishment/home"
            element={
              <PrivateRoutes>
                <HomeList />
              </PrivateRoutes>
            }
          />
          <Route
            path="/establishment/calendar"
            element={
              <PrivateRoutes>
                <HomeCalendar />
              </PrivateRoutes>
            }
          />
          <Route
            path="/establishment/reports"
            element={
              <PrivateRoutes>
                <HomeReports />
              </PrivateRoutes>
            }
          >
            <Route
              path="/establishment/reports"
              element={
                <PrivateRoutes>
                  <ReportList />
                </PrivateRoutes>
              }
            />
            <Route
              path="/establishment/reports/dashboard"
              element={
                <PrivateRoutes>
                  <ReportDashboard />
                </PrivateRoutes>
              }
            />
          </Route>
          <Route
            path="/establishment/shop"
            element={
              <PrivateRoutes>
                <HomeShop />
              </PrivateRoutes>
            }
          />
          <Route
            path="/establishment/service"
            element={
              <PrivateRoutes>
                <HomeService />
              </PrivateRoutes>
            }
          >
            <Route
              path="/establishment/service"
              element={
                <PrivateRoutes>
                  <ServiceList />
                </PrivateRoutes>
              }
            />
            <Route
              path="/establishment/service/edit"
              element={
                <PrivateRoutes>
                  <EditPageService />
                </PrivateRoutes>
              }
            />
          </Route>
          <Route
            path="/establishment/comments"
            element={
              <PrivateRoutes>
                <HomeComments />
              </PrivateRoutes>
            }
          />
          <Route
            path="/establishment/employees"
            element={
              <PrivateRoutes>
                <HomeEmployees />
              </PrivateRoutes>
            }
          />
          <Route
            path="/establishment/hireEmployees"
            element={
              <PrivateRoutes>
                <HomeHire />
              </PrivateRoutes>
            }
          />
        </Route>
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
  );
}
