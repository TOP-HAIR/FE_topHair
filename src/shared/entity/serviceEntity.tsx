export interface Service {
  id: number | 0;
  tipo: string;
  nomeServico: string;
  preco: number;
  descricao: string;
  img: string;
}

export interface DataService {
  tipo: string;
  nomeServico: string;
  preco: number;
  descricao: string;
}

export default Service;
