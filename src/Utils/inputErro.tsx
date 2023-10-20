export function isSenhaValid(inputValue: string) {
  if (inputValue.length < 8) {
    return "A Senha deve ter no mínimo 8 Caracteres";
  }

  if (!/\d/.test(inputValue)) {
    return "A Senha deve conter pelo menos 1 Número";
  }

  if (!/[a-zA-Z]/.test(inputValue)) {
    return "A Senha deve conter pelo menos 1 Letra";
  }

  if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-=]/.test(inputValue)) {
    return "A Senha deve conter pelo menos 1 Caractere Especial";
  }

  return true;
}
