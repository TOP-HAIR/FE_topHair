export interface Agenda {
  idAgenda: number;
  data: Date;
  hora: string;
  status: string;
}

export interface Agendamento {
  start: Date;
  end: Date;
  title: string;
  background: string;
}

export interface AgendaRelatorio {
  dataInicio: Date;
  dataFinal: Date;
  precoTotal: number;
}
