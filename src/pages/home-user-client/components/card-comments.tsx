import { Rating } from "@mui/material";
import React from "react";

export default function CardComments(comments: any) {
  return (
    <>
      <div className="w-full">
        <div className="card-service max-h-48 flex">
          <div className="h-44 w-1/6 flex items-center justify-center">
            <div className="h-24 w-24 bg-black rounded-full"></div>
          </div>

          <div className="h-full w-5/6 flex gap-4">
            <div className="bg-gray-300 h-36 w-0.5 rounded-full"></div>
            <div className="p-4">
              <div className="flex gap-4 flex-col">
                <p className="text-xl">
                  {comments?.avaliacao?.usuario.nomeCompleto}
                </p>
                <div className="flex gap-2">
                  <Rating
                    name="read-only"
                    value={comments?.avaliacao?.nivel}
                    readOnly
                  />
                  <p>{comments?.avaliacao?.nivel}</p>
                </div>
                <div className="text-lg">
                  <p className="text-base">{comments?.avaliacao?.comentario}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
