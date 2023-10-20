"use client";
import { useState } from "react";
import {
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import * as React from "react";
import "../../../../assets/configs/css/register-page.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import iconTophair from "../../../../assets/configs/img/logo/white-logo.png";

export default function Multistep(): React.JSX.Element {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [show, setShow] = useState(0);

  const handleClick = (stateIcon: number) => {
    if (show != 0) {
      setShow(0);
      return;
    }
    setShow(stateIcon);
  };

  const handlesClick = () => {
    setStep(step + 1);
    if (step === 3) {
      setProgress(100);
    } else {
      setProgress(progress + 33.33);
    }
  };

  const Form1 = () => {
    return (
      <>
        <div className="w-96">
          <div className="w-full">
            <a href="/" className=" text-sm text-cyan-400">
              <u>Voltar para o site</u>
            </a>
          </div>
          <Heading
            w="100%"
            display={"flex"}
            justifyContent={"center"}
            textAlign={"center"}
            fontWeight="normal"
          >
            <img
              className="h-24 w-24 mb-10"
              src={iconTophair}
              alt="tophair-icon"
            />
          </Heading>
          <FormControl mr="5%">
            <FormLabel fontWeight={"normal"}>Razão social</FormLabel>
            <Input
              className="input-text-form"
              size="sm"
              placeholder="Riot games"
            />
          </FormControl>
          <FormControl>
            <FormLabel fontWeight={"normal"}>CNPJ</FormLabel>
            <Input
              className="input-text-form"
              size="sm"
              placeholder="168481687-4"
            />
          </FormControl>
          <FormControl mt="2%">
            <FormLabel fontWeight={"normal"}>Email</FormLabel>
            <Input
              className="input-text-form"
              size="sm"
              type="email"
              placeholder="exemplo@gmail.com"
            />
          </FormControl>
          <FormControl mt="2%">
            <FormLabel fontWeight={"normal"}>Senha</FormLabel>
            <InputGroup size="md">
              <Input
                className="input-text-form"
                size="sm"
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="**********"
              />
              <InputRightElement>
                <Button
                  className="button-form-show-input !bg-white"
                  h="1.40rem"
                  size="sm"
                  mb="10%"
                  mr="5%"
                  onClick={() => handleClick(1)}
                >
                  {show === 1 ? (
                    <VisibilityOffIcon fontSize="small" />
                  ) : (
                    <VisibilityIcon fontSize="small" />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl mt="2%" mb="1%">
            <FormLabel fontWeight={"normal"}>Confirme sua senha</FormLabel>
            <InputGroup size="md">
              <Input
                className="input-text-form"
                size="sm"
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="**********"
              />
              <InputRightElement>
                <Button
                  className="button-form-show-input !bg-white"
                  h="1.40rem"
                  size="sm"
                  mb="10%"
                  mr="5%"
                  onClick={() => handleClick(2)}
                >
                  {show === 2 ? (
                    <VisibilityOffIcon fontSize="small" />
                  ) : (
                    <VisibilityIcon fontSize="small" />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </div>
      </>
    );
  };

  const Form2 = () => {
    return (
      <>
        <div className="w-96">
          <div className="w-full">
            <a href="/" className=" text-sm text-cyan-400">
              <u>Voltar para o site</u>
            </a>
          </div>
          <Heading
            w="100%"
            display={"flex"}
            justifyContent={"center"}
            textAlign={"center"}
            fontWeight="normal"
          >
            <img className="h-24 w-24" src={iconTophair} alt="tophair-icon" />
          </Heading>

          <Flex mt="2%">
            <FormControl mr="5%">
              <FormLabel fontWeight={"normal"}>CEP</FormLabel>
              <Input
                className="input-text-form"
                size="sm"
                placeholder="0-816957"
              />
            </FormControl>

            <FormControl>
              <FormLabel fontWeight={"normal"}>Nº</FormLabel>
              <Input className="input-text-form" size="sm" placeholder="69" />
            </FormControl>
          </Flex>

          <FormControl as={GridItem} colSpan={6}>
            <FormLabel
              fontSize="sm"
              fontWeight="md"
              color="white"
              _dark={{ color: "gray.50" }}
              mt="2%"
            >
              Logradouro
            </FormLabel>
            <Input
              className="input-text-form"
              type="text"
              size="sm"
              w="full"
              placeholder="Rua Thurusbangos Thurusbagos"
            />
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
            <FormLabel
              fontSize="sm"
              fontWeight="md"
              color="white"
              _dark={{ color: "gray.50" }}
              mt="2%"
            >
              Bairro
            </FormLabel>
            <Input
              className="input-text-form"
              type="text"
              size="sm"
              w="full"
              placeholder="Pq.Jarvan IV"
            />
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
            <FormLabel
              fontSize="sm"
              fontWeight="md"
              color="white"
              _dark={{ color: "gray.50" }}
              mt="2%"
            >
              Complemento
            </FormLabel>
            <Input
              className="input-text-form"
              type="text"
              size="sm"
              w="full"
              placeholder="Condomínio Luxanna"
            />
          </FormControl>

          <Flex mt="2%">
            <FormControl mr="5%">
              <FormLabel fontWeight={"normal"}>Estado</FormLabel>
              <Input
                className="input-text-form"
                size="sm"
                placeholder="São Paulo"
              />
            </FormControl>

            <FormControl>
              <FormLabel fontWeight={"normal"}>Cidade</FormLabel>
              <Input
                className="input-text-form"
                size="sm"
                placeholder="São Paulo"
              />
            </FormControl>
          </Flex>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <Box
          className="form-register"
          borderWidth="1px"
          textColor={"white"}
          shadow="1px 1px 10px rgba(0,0,0,0.3)"
          maxWidth={450}
          py={3}
          px={6}
          bgColor={"#041720"}
          m="55px auto"
          as="form"
        >
          {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
          <ButtonGroup mt="5%" w="100%">
            <Flex w="100%" justifyContent="space-between">
              <Flex
                w="100%"
                justifyContent={step !== 1 ? "space-between" : "end"}
              >
                {step !== 1 && (
                  <Button
                    className="button-form"
                    onClick={() => {
                      setStep(step - 1);
                      setProgress(progress - 33.33);
                    }}
                    isDisabled={step === 1}
                    variant="solid"
                    w="8rem"
                    mr="5%"
                  >
                    Voltar
                  </Button>
                )}
                {step !== 2 && (
                  <Button
                    className="button-form"
                    w="8rem"
                    isDisabled={step === 2}
                    onClick={() => handlesClick()}
                    textColor={"teal"}
                    variant="ghost"
                  >
                    Avançar
                  </Button>
                )}

                {step === 2 ? (
                  <Button
                    className="button-form"
                    w="8rem"
                    variant="solid"
                    onClick={() => {
                      toast({
                        title: "Conta criada com sucesso.",
                        description: "Seja bem vindo ao Tophair.",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                        position: "top-end",
                      });
                    }}
                  >
                    Cadastrar
                  </Button>
                ) : null}
              </Flex>
            </Flex>
          </ButtonGroup>
        </Box>
      </div>
    </>
  );
}
