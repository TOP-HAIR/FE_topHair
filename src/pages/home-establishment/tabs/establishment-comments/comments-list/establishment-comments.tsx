import React from "react";
import { Card } from "@mui/material";
import { useState, useEffect } from "react";
import { Comment } from "../../../../../shared/entity/commentsEntity";
import CommentService from "../components/comment-service";
import LoaderResponse from "../../../../../components/loaderResponse";
import NoContentComponent from "../../../../../components/noContent";
import { getCommentContext } from "../../../../../shared/contexts/commentsContext";

export default function HomeComments() {
  const [loadResponse, setloadResponse] = useState(false);
  const [resLenghtValid, setResLenghtValid] = useState(false);
  const [comment, setComment] = useState<Comment[]>([]);

  useEffect(() => {
    async function listarAvaliacoes() {
      setloadResponse(false);
      try {
        const res = await getCommentContext();
        console.log(res);
        if (res == undefined || res.data.length == 0) {
          setResLenghtValid(true);
        }
        if (res != undefined) {
          setComment(res.data);
        }
        setloadResponse(true);
      } catch (error) {
        console.error("Erro ao buscar serviços:", error);
      }
    }

    listarAvaliacoes();
  }, []);
  return (
    <>
      <section className="w-full h-full">
        <Card className="h-full m-5">
          <h2 className="m-6 text-2xl font-bold">Comentários</h2>
          {!loadResponse ? (
            <LoaderResponse />
          ) : resLenghtValid ? (
            <NoContentComponent />
          ) : (
            <div className="m-6 grid grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
              {comment.map((comment) => (
                <div
                  key={comment.idAvaliacao}
                  className="w-full grid rounded card-service p-4 relative gap-4 grow"
                >
                  <CommentService comment={comment} />
                </div>
              ))}
            </div>
          )}
        </Card>
      </section>
    </>
  );
}
