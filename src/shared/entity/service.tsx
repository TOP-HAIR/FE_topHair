export interface Service {
  id: number | 0;
  tipo: string;
  nome: string;
  valor: number;
  descricao: string;
  img: string;
}

export interface DataService {
  tipo: string;
  nome: string;
  valor: number;
  descricao: string;
}

export default Service;
