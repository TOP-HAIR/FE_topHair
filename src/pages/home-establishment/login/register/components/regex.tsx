export const validEmail = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
 );
export const validPassword = new RegExp(
    '^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$'
);
export const validCNPJ = new RegExp(
 '^([A-Za-z]{2})([A-Za-z0-9]{3})([A-Za-z0-9]{4})([A-Za-z0-9]{3})([A-Za-z0-9]{3})([A-Za-z0-9]{2})([A-Za-z0-9]{2})([A-Za-z0-9]{3})([A-Za-z0-9]{3})([A-Za-z0-9]{2})$'
);