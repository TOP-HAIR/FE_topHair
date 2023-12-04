import React from "react";
import Header from "./components/header";
import "swiper/css";
import "swiper/css/navigation";
import Footer from "../../components/footer";
import { Outlet } from "react-router-dom";

export default function HomeUserClientPage() {
  const headerValue = "";
  return (
    <>
      <Header header={headerValue} />
      <main className="w-full">
        <Outlet />
      </main>
      <div className="bg-black py-10">
        <Footer />
      </div>
    </>
  );
}
