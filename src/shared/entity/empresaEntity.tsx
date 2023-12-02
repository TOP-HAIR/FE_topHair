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
