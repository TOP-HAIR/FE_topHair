'use client'
import { useState } from 'react'
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Img,
} from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'
import { validEmail, validPassword, validCNPJ } from '../register/components/regex'
import * as React from 'react'
import "../../../../assets/configs/css/register-page.css"
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import iconTophair from "../../../../assets/configs/img/logo/white-logo.png"


export default function Multistep(): React.JSX.Element {
  const toast = useToast()
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(33.33)
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);
  
  const handleClick = () => setShow(!show)

  const [errors, setErrors] = useState({
    email: false
  });

  const errs = { emailError: false, passwordError: false };

  const checkErrors = () => {
    if (!validEmail.test(email)) {
      errs.emailError = true;
    }
    //if (!validPassword.test(password)) {
     // errs.passwordError = true;
    //}
    if (!Object.values(errors).some(value => value)) {
      setErrors(
        {
          email: errs.emailError
        }
      )
      setHasErrors(true);
    }else{
      setHasErrors(false);
    }
  }

  const handlesClick = () => {
   // checkErrors();
   // console.log(hasErrors);

   // if (hasErrors) {
    //  setIsDisabled(true)
     // return
    //}

    setStep(step + 1)
    if (step === 3) {
      setProgress(100)
    } else {
      setProgress(progress + 33.33)
    }
  }


  const Form1 = () => {

    return (
      <>
        <Heading w="100%" display={'flex'} justifyContent={'center'} textAlign={'center'} fontWeight="normal">
          <img className="h-24 w-24 mb-10" src={iconTophair} alt="tophair-icon" />
        </Heading>
        <Flex>
          <FormControl mr="5%">
            <FormLabel fontWeight={'normal'}>
              Razão social
            </FormLabel>
            <Input className='input-text-form' size="sm" placeholder="Riot games" />
          </FormControl>

          <FormControl>
            <FormLabel fontWeight={'normal'}>
              CNPJ
            </FormLabel>
            <Input className='input-text-form' size="sm" placeholder="168481687-4" />
          </FormControl>
        </Flex>

        <FormControl mt="2%">
          <FormLabel fontWeight={'normal'}>
            Email
          </FormLabel>
          <Input className='input-text-form' size="sm" type="email" placeholder="exemplo@gmail.com" />
        </FormControl>

        <FormControl mt="2%">
          <FormLabel fontWeight={'normal'} >
            Senha
          </FormLabel>
          <InputGroup size="md">
            <Input className='input-text-form' size="sm" pr="4.5rem" type={show ? 'text' : 'password'} placeholder="**********" />
            <InputRightElement width="4.5rem">
              <Button className='button-form-show-input' h="1.40rem" size="sm" mb="10%" mr="5%" onClick={handleClick}> {show ? <VisibilityOffIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />} </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl mt="2%" mb="1%">
          <FormLabel fontWeight={'normal'} >
            Confirme sua senha
          </FormLabel>
          <InputGroup size="md">
            <Input className='input-text-form' size="sm" pr="4.5rem" type={show ? 'text' : 'password'} placeholder="**********" />
            <InputRightElement width="4.5rem">
              <Button className='button-form-show-input' h="1.40rem" size="sm" mb="10%" mr="5%" onClick={handleClick}> {show ? <VisibilityOffIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />} </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>



      </>
    )
  }

  const Form2 = () => {
    return (
      <>
        <Heading w="100%" display={'flex'} justifyContent={'center'} textAlign={'center'} fontWeight="normal">
          <img className="h-24 w-24" src={iconTophair} alt="tophair-icon" />
        </Heading>

        <Flex mt="2%">
          <FormControl mr="5%">
            <FormLabel fontWeight={'normal'}>
              CEP
            </FormLabel>
            <Input className='input-text-form' size="sm" placeholder="0-816957" />
          </FormControl>

          <FormControl>
            <FormLabel fontWeight={'normal'}>
              Nº
            </FormLabel>
            <Input className='input-text-form' size="sm" placeholder="69" />
          </FormControl>
        </Flex>

        <FormControl as={GridItem} colSpan={6}>
          <FormLabel fontSize="sm" fontWeight="md" color="white" _dark={{ color: 'gray.50' }} mt="2%">
            Logradouro
          </FormLabel>
          <Input className='input-text-form' type="text" size="sm" w="full" placeholder="Rua Thurusbangos Thurusbagos" />
        </FormControl>

        <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
          <FormLabel fontSize="sm" fontWeight="md" color="white" _dark={{ color: 'gray.50' }} mt="2%">
            Bairro
          </FormLabel>
          <Input className='input-text-form' type="text" size="sm" w="full" placeholder="Pq.Jarvan IV" />
        </FormControl>

        <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
          <FormLabel fontSize="sm" fontWeight="md" color="white" _dark={{ color: 'gray.50' }} mt="2%">
            Complemento
          </FormLabel>
          <Input className='input-text-form' type="text" size="sm" w="full" placeholder="Condomínio Luxanna" />
        </FormControl>

        <Flex mt="2%">
          <FormControl mr="5%">
            <FormLabel fontWeight={'normal'}>
              Estado
            </FormLabel>
            <Input className='input-text-form' size="sm" placeholder="São Paulo" />
          </FormControl>

          <FormControl>
            <FormLabel fontWeight={'normal'}>
              Cidade
            </FormLabel>
            <Input className='input-text-form' size="sm" placeholder="São Paulo" />
          </FormControl>
        </Flex>
      </>
    )
  }

  const Form3 = () => {
    return (
      <>
        <Heading w="100%" textAlign={'center'} fontWeight="normal">
          Finalizar
        </Heading>
        <SimpleGrid columns={1} spacing={6}>

        </SimpleGrid>
      </>
    )
  }

 // const handleBlur = () => {
  //  checkErrors()
 // }

  return (
    <>
      <Box
        className='form-register'
        borderWidth="1px"
        textColor={'white'}
        shadow="1px 1px 10px rgba(0,0,0,0.3)"
        maxWidth={450}
        p={6}
        bgColor={"#041720"}
        m="55px auto"
        as="form">
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                className='button-form-back'
                onClick={() => {
                  setStep(step - 1)
                  setProgress(progress - 33.33)
                }}
                isDisabled={step === 1}
                variant="solid"
                w="6rem"
                mr="5%">
                Voltar
              </Button>
              <Button className='button-form-next'
                w="6rem"
                isDisabled={step === 2}
                onClick={() => handlesClick()}
                textColor={'teal'}
                variant="ghost">
                Avançar
              </Button>
            </Flex>
            {step === 2 ? (
              <Button
                className='button-form-register'
                w="7rem"
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Conta criada com sucesso.',
                    description: "Seja bem vindo ao Tophair.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position: 'top'
                  })
                }}>
                Cadastrar
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  )
}