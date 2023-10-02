import * as React from "react";
import Loginpage from "./pages/home-establishment/login/components/login";
import HomePage from "./pages/home-page/home-page";
import TestePage from "./pages/home-establishment/login/components/teste";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <TestePage />
    </ChakraProvider>
  );
}

export default App;

