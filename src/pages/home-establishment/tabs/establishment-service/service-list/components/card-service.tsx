import React from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";

const service = {
  nome: "Serviço",
  tipo: "tipo do serviço",
  valor: "R$ 20,00",
  descricao:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
};
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn bg-warning w-32",
    cancelButton: "btn bg-danger w-32",
  },
  buttonsStyling: true,
});

function editService() {}

function deletarService() {
  swalWithBootstrapButtons
    .fire({
      title: "Tem certeza que deseja deletar esse serviço?",
      text: "Você não será capaz de reverter essa ação!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Deletar!",
      cancelButtonText: "Cancelar",
      reverseButtons: false,
      width: 450,
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          "Deleted!",
          "Your file has been deleted.",
          "success"
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          "Cancelled",
          "Your imaginary file is safe :)",
          "error"
        );
      }
    });
}

export default function CardService() {
  return (
    <>
      <div className="bg-white w-80 h-52 min-w-80 rounded card-service p-4 relative">
        <div className="flex flex-col gap-1">
          <h3 className="font-bold">Serviço: {service.nome}</h3>
          <p>
            <b>Tipo: </b>
            {service.tipo}
          </p>
          <p>
            <b>Valor: </b>
            {service.valor}
          </p>
          <p>
            <b>Descrição: </b>
            {service.descricao}
          </p>
        </div>
        <div className="absolute top-3 right-3 gap-2 flex ">
          <BorderColorIcon className="cursor-pointer" onClick={editService} />
          <DeleteIcon className="cursor-pointer" onClick={deletarService} />
        </div>
      </div>
    </>
  );
}
