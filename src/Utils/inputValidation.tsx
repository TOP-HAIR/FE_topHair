export function trimInput(inputValue: string) {
  return inputValue.trim();
}

export function isValidEmail(inputValue: string) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(inputValue);
}

export function isSenhaValid(inputValue: string) {
  if (inputValue.length < 8) {
    return false;
  }
  return true;
}

export function inputPossuiNúmero(inputValue: string) {
  if (!/\d/.test(inputValue)) {
    return false;
  }
  return true;
}

export function inputPossuiLetra(inputValue: string) {
  if (!/[a-zA-Z]/.test(inputValue)) {
    return false;
  }
  return true;
}

export function inputPossuiCaractereEspecial(inputValue: string) {
  if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-=]/.test(inputValue)) {
    return false;
  }
  return true;
}
