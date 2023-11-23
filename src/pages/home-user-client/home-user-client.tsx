import React, { useState } from "react";
import ImagemHomemMain from "../../assets/configs/img/homem-jovem-e-sensivel-pensando.png";
import FashionLinha from "../../assets/configs/img/Linhas.png";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import { OutlinedInput, Select, SelectChangeEvent } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArticleIcon from "@mui/icons-material/Article";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { estadosBrasil } from "@/shared/hooks/utils/arrayList";
import "swiper/css";
import "swiper/css/navigation";
import Header from "./components/header";
import Footer from "../../components/footer";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function HomeUserClient() {
  const [estadoSigla, setEstadoSigla] = useState<string>("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setEstadoSigla(event.target.value);
  };

  return (
    <>
      <Header />
      <main className="w-full flex flex-col">
        <section className="bg-black page-layout-1x w-full flex justify-center ">
          <div className="mt-10 grid-home-width max-md:columns-2 w-full h-full flex">
            <div className="w-full flex items-center">
              <img
                className="min-w-md max-w-md max-h-[44rem] my-auto"
                src={ImagemHomemMain}
                alt="Imagem de um Homem posando"
              />
            </div>
            <div className="w-full flex flex-col content-center my-auto gap-4">
              <div className="flex flex-col gap-4">
                <h1 className="uppercase bg-text-home-client font-family-inria-sans text-8xl">
                  Fashion
                </h1>
                <img src={FashionLinha} alt="Linhas decoração" />
                <p className="text-white font-family-inria-sans text-lg">
                  Ache em qualquer lugar uma barbearia perto da sua casa.
                </p>
              </div>
              <div className="w-full pr-24">
                <p className="uppercase text-white text-4xl font-family-dm-sans">
                  <span className="color-primary-aqua">Style</span> for life
                </p>
                <p className="uppercase text-white text-4xl font-family-dm-sans float-right">
                  Make your own <span className="color-primary-aqua">pace</span>
                </p>
              </div>
              <p className="text-white text-lg">
                Descubra as barbearias mais renomadas e talentosas perto de
                você. Estamos prontos para transformar seu visual e garantir que
                cada corte seja uma obra-prima. Junte-se a nós para uma
                experiência única de beleza e estilo. Seu melhor visual começa
                aqui, no coração do seu estado!
              </p>
            </div>
          </div>
        </section>
        <section
          className="page-layout-1x w-full flex justify-center py-20"
          id="start-here"
        >
          <div className="bg-gray-300 w-full flex justify-center">
            <div className="grid-home-width max-md:columns-2 w-full h-full flex flex-col items-center justify-center gap-14">
              <h2 className="text-4xl font-bold max-sm:text-2xl">
                Selecione seu Estado
              </h2>
              <p className="mx-4 text-center text-xl drop-shadow-2xl font-normal font-family-dm-sans max-sm:text-base">
                Selecione a sua região para uma experiência de barbear única!
                Descubra as melhores barbearias locais que oferecem serviços
                personalizados e de alta qualidade.
              </p>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: "95%",
                }}
              >
                <Select
                  labelId="demo-simple-select-label"
                  sx={{ flex: 1 }}
                  input={<OutlinedInput />}
                  displayEmpty
                  label="Age"
                  value={estadoSigla}
                  MenuProps={MenuProps}
                  onChange={handleChange}
                  placeholder="Selecione o Estado"
                >
                  {estadosBrasil.map((estado) => (
                    <MenuItem key={estado.sigla} value={estado.sigla}>
                      {estado.nome}
                    </MenuItem>
                  ))}
                </Select>

                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton
                  type="button"
                  sx={{
                    p: "10px",
                  }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </div>
          </div>
        </section>
        <section className="pb-20 w-full flex justify-center" id="freelancers">
          <div className="w-full flex justify-center">
            <div className="grid-home-width w-full h-full flex flex-col items-center justify-center gap-16">
              <h2 className="text-3xl font-bold max-sm:text-2xl text-center">
                Procurando Oportunidade no mercado de trabalho?
              </h2>
              <p className="mx-4 text-center text-xl drop-shadow-2xl font-normal font-family-dm-sans max-sm:text-base">
                Desbrave novos horizontes na arte da barbearia e transforme sua
                busca por oportunidades em uma jornada de sucesso, cortando
                caminho para um futuro promissor no mercado de trabalho.
              </p>
              <div className="grid grid-cols-3 gap-5 max-lg:hidden mx-4">
                <div className="py-8 px-6 flex flex-col items-center gap-3 card-service">
                  <AccountBoxIcon className="h-20 w-20 color-primary-aqua"></AccountBoxIcon>
                  <h3 className="text-2xl font-bold max-sm:text-1xl">
                    Crie seu Usuário
                  </h3>
                  <p className="text-center text-lg drop-shadow-2xl font-normal font-family-dm-sans max-sm:text-base">
                    Para explorar oportunidades de carreira emocionantes, crie
                    seu usuário agora. Ao estabelecer sua conta, você terá
                    acesso exclusivo a uma variedade de empregos personalizados
                    para o seu perfil. Registre-se e destaque suas habilidades,
                    experiências e ambições.Aqui na nossa plataforma, conectamos
                    talentos a oportunidades, e estamos ansiosos para ajudar
                    você a alcançar seus objetivos profissionais.
                  </p>
                </div>
                <div className="py-8 px-6 flex flex-col items-center gap-3 card-service">
                  <ArticleIcon className="h-20 w-20 color-primary-aqua"></ArticleIcon>
                  <h3 className="text-2xl font-bold max-sm:text-1xl">
                    Analisando Perfil
                  </h3>
                  <p className="text-center text-lg drop-shadow-2xl font-normal font-family-dm-sans max-sm:text-base">
                    Para explorar oportunidades de carreira emocionantes, crie
                    seu usuário agora. Ao estabelecer sua conta, você terá
                    acesso exclusivo a uma variedade de empregos personalizados
                    para o seu perfil. Registre-se e destaque suas habilidades,
                    experiências e ambições.Aqui na nossa plataforma, conectamos
                    talentos a oportunidades, e estamos ansiosos para ajudar
                    você a alcançar seus objetivos profissionais.
                  </p>
                </div>
                <div className="py-8 px-6 flex flex-col items-center gap-3 card-service">
                  <EmailIcon className="h-20 w-20 color-primary-aqua"></EmailIcon>
                  <h3 className="text-2xl font-bold max-sm:text-xl">
                    Receba um E-mail
                  </h3>
                  <p className="text-center text-lg drop-shadow-2xl font-normal font-family-dm-sans max-sm:text-base">
                    Para explorar oportunidades de carreira emocionantes, crie
                    seu usuário agora. Ao estabelecer sua conta, você terá
                    acesso exclusivo a uma variedade de empregos personalizados
                    para o seu perfil. Registre-se e destaque suas habilidades,
                    experiências e ambições.Aqui na nossa plataforma, conectamos
                    talentos a oportunidades, e estamos ansiosos para ajudar
                    você a alcançar seus objetivos profissionais.
                  </p>
                </div>
              </div>

              <div className="lg:hidden w-screen">
                <Swiper navigation={true} loop={true} modules={[Navigation]}>
                  <SwiperSlide>
                    <div className="py-8 px-6 flex flex-col items-center gap-3">
                      <AccountBoxIcon className="h-20 w-20 color-primary-aqua"></AccountBoxIcon>
                      <h3 className="text-2xl font-bold max-sm:text-1xl">
                        Crie seu Usuário
                      </h3>
                      <p className="px-12 text-center text-lg font-normal font-family-dm-sans max-sm:text-base">
                        Para explorar oportunidades de carreira emocionantes,
                        crie seu usuário agora. Ao estabelecer sua conta, você
                        terá acesso exclusivo a uma variedade de empregos
                        personalizados para o seu perfil. Registre-se e destaque
                        suas habilidades, experiências e ambições.Aqui na nossa
                        plataforma, conectamos talentos a oportunidades, e
                        estamos ansiosos para ajudar você a alcançar seus
                        objetivos profissionais.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="py-8 px-6 flex flex-col items-center gap-3 card-service">
                      <ArticleIcon className="h-20 w-20 color-primary-aqua"></ArticleIcon>
                      <h3 className="text-2xl font-bold max-sm:text-1xl">
                        Analisando Perfil
                      </h3>
                      <p className="px-12 text-center text-lg font-normal font-family-dm-sans max-sm:text-base">
                        Para explorar oportunidades de carreira emocionantes,
                        crie seu usuário agora. Ao estabelecer sua conta, você
                        terá acesso exclusivo a uma variedade de empregos
                        personalizados para o seu perfil. Registre-se e destaque
                        suas habilidades, experiências e ambições.Aqui na nossa
                        plataforma, conectamos talentos a oportunidades, e
                        estamos ansiosos para ajudar você a alcançar seus
                        objetivos profissionais.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="py-8 px-6 flex flex-col items-center gap-3 card-service">
                      <EmailIcon className="h-20 w-20 color-primary-aqua"></EmailIcon>
                      <h3 className="text-2xl font-bold max-sm:text-xl">
                        Receba um E-mail
                      </h3>
                      <p className="px-12 text-center text-lg font-normal font-family-dm-sans max-sm:text-base">
                        Para explorar oportunidades de carreira emocionantes,
                        crie seu usuário agora. Ao estabelecer sua conta, você
                        terá acesso exclusivo a uma variedade de empregos
                        personalizados para o seu perfil. Registre-se e destaque
                        suas habilidades, experiências e ambições.Aqui na nossa
                        plataforma, conectamos talentos a oportunidades, e
                        estamos ansiosos para ajudar você a alcançar seus
                        objetivos profissionais.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="bg-black py-20">
        <Footer />
      </div>
    </>
  );
}
