import React from "react";
import { Comment } from "../../../../../shared/entity/commentsEntity";
import { Rating } from "@mui/material";

export default function CommentService({ comment }: { comment: Comment }) {
  return (
    <>
      <div className="flex gap-4 items-center">
        <img
          className="rounded-full h-12 w-12"
          src={comment.imagem}
          alt="Imagem Perfil Usuário"
        />
        <div>
          <h3 className="font-semibold text-lg ">
            {comment?.usuario?.nomeCompleto}
          </h3>
          <div className="flex gap-2">
            <Rating name="read-only" value={comment?.nivel} readOnly />
            <p className="font-extralight">{comment?.nivel}</p>
          </div>
        </div>
      </div>
      <p className=" font-family-dm-sans">{comment.comentario}</p>
    </>
  );
}
