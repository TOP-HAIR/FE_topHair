import React from "react";
import Comment from "../../../../../shared/entity/commentsEntity";

export default function CommentService({ comment }: { comment: Comment }) {
  return (
    <>
      <div className="flex gap-4 items-center">
        <img
          className="rounded-full h-12 w-12"
          src={comment.imagem}
          alt="Imagem Perfil Usuário"
        />
        <h3 className="font-semibold text-lg ">
          {comment?.usuario?.nomeCompleto}
        </h3>
      </div>
      <p className=" font-family-dm-sans">{comment.comentario}</p>
    </>
  );
}
