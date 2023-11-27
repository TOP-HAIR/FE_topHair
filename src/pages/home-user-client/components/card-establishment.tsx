import React from "react";

export default function CardEstablishment() {
  return (
    <>
      <div className="w-full">
        <div className="card-service max-h-48 flex cursor-pointer">
          <div className="h-44 w-1/5 bg-black rounded"></div>
          <div className="h-full w-4/5 p-2 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full h-12 w-12 bg-black"></div>
              <p className="text-xl">Teste</p>
            </div>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
