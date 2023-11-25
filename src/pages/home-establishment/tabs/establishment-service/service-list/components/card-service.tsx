import React from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import Service from "../../../../../../shared/entity/serviceEntity";

export default function CardService({
  service,
  onDelete,
  linkEdit,
}: {
  service: Service;
  onDelete: () => void;
  linkEdit: () => void;
}) {
  return (
    <>
      <div className="flex flex-col gap-1">
        <h3 className="font-bold">Serviço: {service.nomeServico}</h3>
        <p>
          <b>Tipo: </b>
          {service.tipo}
        </p>
        <p>
          <b>Valor: </b>
          {service.preco}
        </p>
        <p>
          <b>Descrição: </b>
          {service.descricao}
        </p>
      </div>
      <div className="absolute top-3 right-3 gap-2 flex ">
        <BorderColorIcon className="cursor-pointer" onClick={linkEdit} />
        <DeleteIcon className="cursor-pointer" onClick={onDelete} />
      </div>
    </>
  );
}
