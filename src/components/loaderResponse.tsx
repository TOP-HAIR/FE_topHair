import React from "react";
import "../assets/configs/css/loaderResponse.css";

export default function LoaderResponse() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="loader"></span>
          <span className="loaderer font-family-dm-sans font-semibold">
            Loading
          </span>
        </div>
      </div>
    </>
  );
}
