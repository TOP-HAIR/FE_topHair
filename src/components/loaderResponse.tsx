import React from "react";
import "../assets/configs/css/loaderResponse.css";

export default function LoaderResponse() {
  return (
    <>
      <div className="w-full h-screen bg-slate-900">
        <div className="h-48 flex flex-col justify-items-center items-center">
          <span className="loader"></span>
          <span className="text-white inline-block relative text-2xl right-10 box-border after:content=[''] after:w-5 after:h-5 after:bg-current after:absolute after:bottom-10 after:right-[-10px] after:box-border">
            Loading
          </span>
        </div>
      </div>
    </>
  );
}
