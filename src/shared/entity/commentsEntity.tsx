interface Comment {
  idAvaliacao: number;
  comentario: string;
  imagem: string;
  usuario: {
    nomeCompleto: string;
  };
}

export default Comment;
