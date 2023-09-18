import React from "react";
import HeaderPage from "./components/header";
import HomeMain from "./components/main";

function HomePage() {
  return (
    <>
      <div className="w-auto relative bg-secondary-gray">
        <div className="right-0 page-layout-1x absolute w-8/12 bg-image-home"></div>
        <div className="shadow-home-form">
          <div className="page-layout-1x absolute w-7/12 page-home-form bg-white"></div>
        </div>

        <HeaderPage />
        <HomeMain />
      </div>
    </>
  );
}

export default HomePage;
