// Validações Inputs válidos
export const validateCepFormat = (value: string): boolean => {
  const cepRegex = /^\d{5}-\d{3}$/;
  return cepRegex.test(value);
};

// Regex Inputs

// Validações Inputs Únicos
export const inputSemEspaco = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.target.value = e.target.value.replace(/\s+/g, "");
};

export const inputSomenteTexto = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.target.value = e.target.value.replace(/[^A-Za-zÀ-ú\s]/g, "");
};

export const inputSomenteNumero = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, "");
};

export const inputSemCaracteresEspeciais = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  e.target.value = e.target.value.replace(/[^A-Za-zÀ-ú0-9\s]/g, "");
};
