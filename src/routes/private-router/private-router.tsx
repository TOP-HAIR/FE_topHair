import React, { ReactNode, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserInformation } from "@/shared/entity/Auth";

// let [user, setUser] = useState<UserInformation[]>([]);

// export function userInfo(tokenResponse: string, emailResponse: string) {
// const user = [
//   {
//     cod_usuario: 0,
//     email: emailResponse,
//     token: tokenResponse,
//   },
// ];
// setUser(user);

//   const dataVerification = () => {
//     if (user.length > 0) {
//       const { email, token } = user[0];
//       if (email !== "" && token !== "") {
//         // set;
//         console.log("localStorage");
//         userValid = true;
//       } else {
//         console.log("Email ou token está vazio");
//       }
//     } else {
//       console.log("Usuário não definido");
//     }
//   };
// }

export default function PrivateRoutes({ children }: { children: ReactNode }) {
  let userValid: boolean = true;
  return userValid ? children : <Navigate to="/" />;
}
