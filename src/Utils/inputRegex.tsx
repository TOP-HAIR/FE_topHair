export function validateCNPJ(inputValue: string) {
  const cleanedCNPJ = inputValue.replace(/[^\d]/g, "");

  if (cleanedCNPJ.length !== 14) {
    return false;
  }

  if (/^(\d)\1{13}$/.test(cleanedCNPJ)) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += parseInt(cleanedCNPJ.charAt(i)) * (13 - i);
  }
  let remainder = sum % 11;
  const digit1 = remainder < 2 ? 0 : 11 - remainder;

  sum = 0;
  for (let i = 0; i < 13; i++) {
    sum += parseInt(cleanedCNPJ.charAt(i)) * (14 - i);
  }
  remainder = sum % 11;
  const digit2 = remainder < 2 ? 0 : 11 - remainder;

  return (
    parseInt(cleanedCNPJ.charAt(12)) === digit1 &&
    parseInt(cleanedCNPJ.charAt(13)) === digit2
  );
}

export function validateCPF(inputValue: string) {
  const cleanedCPF = inputValue.replace(/[^\d]/g, "");

  if (cleanedCPF.length !== 11) {
    return false;
  }

  if (/^(\d)\1{10}$/.test(cleanedCPF)) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanedCPF.charAt(i)) * (10 - i);
  }
  let remainder = sum % 11;
  const digit1 = remainder < 2 ? 0 : 11 - remainder;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleanedCPF.charAt(i)) * (11 - i);
  }
  remainder = sum % 11;
  const digit2 = remainder < 2 ? 0 : 11 - remainder;

  return (
    parseInt(cleanedCPF.charAt(9)) === digit1 &&
    parseInt(cleanedCPF.charAt(10)) === digit2
  );
}

export function validatePhone(inputValue: string) {
  const phonePattern = /^[1-9]\d{0,2}(\d{4}|\d{5}|\d{6})\d{4}$/;
  return phonePattern.test(inputValue);
}
