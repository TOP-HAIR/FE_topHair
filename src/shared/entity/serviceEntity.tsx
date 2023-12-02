export interface Service {
  idServico: number | 0;
  tipo: string;
  nomeServico: string;
  preco: number;
  descricao: string;
  img: string;
}

export interface DataService {
  categoria: string;
  nomeServico: string;
  preco: number;
  descricao: string;
  qtdTempoServico: string;
}
