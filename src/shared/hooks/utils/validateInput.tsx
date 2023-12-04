// Validações Inputs válidos
export const validateCepFormat = (value: string): boolean => {
  const cepRegex = /^\d{5}-\d{3}$/;
  return cepRegex.test(value);
};

// Regex Inputs

// Validações Inputs Únicos
export const formatTime = (e: React.ChangeEvent<HTMLInputElement>) => {
  let value = e.target.value;

  value = value.replace(/[^0-9:]/g, "");

  if (value.length > 2 && value.indexOf(":") === -1) {
    value = value.slice(0, 2) + ":" + value.slice(2);
  }

  const [hours, minutes] = value.split(":").map(Number);
  if (!isNaN(hours) && !isNaN(minutes)) {
    value = `${Math.min(23, hours).toString().padStart(2, "0")}:${Math.min(
      59,
      minutes
    )
      .toString()
      .padStart(2, "0")}`;
  }

  e.target.value = value;
};

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
