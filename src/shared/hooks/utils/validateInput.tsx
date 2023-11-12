export const validateCepFormat = (value: string): boolean => {
  const cepRegex = /^\d{5}-\d{3}$/;
  return cepRegex.test(value);
};

export const handleInputChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  fieldType: string
) => {
  const trimmedValue = event.target.value.trim();
  return trimmedValue;
};
