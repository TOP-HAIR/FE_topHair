export const validateCepFormat = (value: string): boolean => {
  const cepRegex = /^\d{5}-\d{3}$/;
  return cepRegex.test(value);
};
