export interface EmpresaAvaliacao {
  idEmpresa: number;
  razaoSocial: string;
  avaliacoes: Array<{
    idAvaliacao: number;
    nivel: number;
    comentario: string;
    usuario: {
      idUsuario: number;
      cpf: string;
      nomeCompleto: string;
      email: string;
      telefone: string;
      isProfissional: boolean;
    };
    empresaDto: {
      idEmpresa: number;
      razaoSocial: string;
      cnpj: string;
    };
  }>;
}

export interface EmpresaComNiveis {
  idEmpresa: number;
  razaoSocial: string;
  niveis: number[];
}

export interface EmpresaCadastro {
  razaoSocial: string;
  cnpj: string;
}

export interface Avaliacao {
  idAvaliacao: number;
  nivel: number;
  comentario: string;
  usuario: {
    idUsuario: number;
    cpf: string;
    nomeCompleto: string;
    email: string;
    telefone: string;
    isProfissional: boolean;
  };
}

export interface EmployeeCadastro {
  cpf: string;
  nomeCompleto: string;
  email: string;
  senha: string;
  telefone: string;
  isProfissional: boolean;
  empresa?: {
    idEmpresa: number;
  };
}
export interface MetricaEmpresa {
  idMetricaEmpresa: number;
  totalSemanal: number;
  qtdAgendas: number;
  servicoMaisPedidos: string;
  servicoMenosPedidos: string;
  faturamentoMinimo: string;
  faturamentoMaximo: string;
  qtdAgendaDomingo: number;
  qtdAgendaSegunda: number;
  qtdAgendaTerca: number;
  qtdAgendaQuarta: number;
  qtdAgendaQuinta: number;
  qtdAgendaSexta: number;
  qtdAgendaSabado: number;
}

export interface DadoChart {
  semana: string;
  total: number;
}
