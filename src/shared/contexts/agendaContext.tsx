import { AgendaServices } from "../services/agendaService";

const agendaServices = new AgendaServices();

const objetoString = sessionStorage.getItem("dataEmpresa");
if (objetoString !== null) {
  const objeto = JSON.parse(objetoString);
  const idEmpresa = objeto.idEmpresa;
  agendaServices.idEmpresa = idEmpresa;
}

export const getAgendamentos = async () => {
  return await agendaServices.getAgendamentos();
};
