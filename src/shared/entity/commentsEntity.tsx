interface Comment {
  idAvaliacao: number;
  comentario: string;
  nivel: number;
  imagem: string;
  usuario: {
    nomeCompleto: string;
  };
}

export default Comment;
