import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Comments() {
  const comments = [
    {
      alt: "Foto de imagem de perfil de um homem sorrindo",
      name: "Alan Roger dos Santos - BA",
      text: "Esses estabelecimentos deixaram de ser somente locais para aparar o cabelo e fazer a barba para se tornarem importantes centros de cuidado masculino, e são pensados para deixar esse público confortável para explorar novos produtos e procedimentos.",
      company: "Empresa - Los Ângulos - FMA",
    },
    {
      alt: "Foto de imagem de perfil de um homem sentado em uma cadeira com a palma das mãos junta",
      name: "Carlos Silva - SP",
      text: "Os espaços de cuidado masculino evoluíram para serem mais do que simples salões de beleza. Eles são verdadeiros refúgios onde os homens podem relaxar e experimentar novos tratamentos.",
      company: "Cosmética Masculina - São Paulo",
    },
    {
      alt: "Foto de imagem de perfil de um homem de óculos com um suéter vinho de braços cruzados pensativo",
      name: "Rafael Mendes - RJ",
      text: "Hoje em dia, os estabelecimentos voltados para os cuidados masculinos oferecem uma experiência completa, proporcionando conforto e inovação.",
      company: "Estilo Homem - Rio de Janeiro",
    },
    {
      alt: "Foto de imagem de perfil de um homem de jaqueta azul e camisa listrado olhando para o horizonte",
      name: "José Oliveira - MG",
      text: "Os centros de cuidado masculino não são mais apenas lugares para cortar cabelo e fazer a barba; eles se transformaram em locais de bem-estar e relaxamento.",
      company: "Beleza Total - Belo Horizonte",
    },
    {
      alt: "Foto de imagem de perfil de um homem com camisa branca e jaqueta marrom sorrindo",
      name: "Felipe Santos - PR",
      text: "A evolução dos espaços de cuidado masculino reflete a crescente demanda por serviços e produtos de qualidade voltados para os homens.",
      company: "Macho Alfa - Curitiba",
    },
    {
      alt: "Foto de imagem de perfil de um homem com barba grande e de camisa verde escura",
      name: "André Pereira - RS",
      text: "Nossos estabelecimentos estão projetados para atender às necessidades dos homens modernos, oferecendo um ambiente acolhedor e serviços de primeira classe.",
      company: "Bem Homem - Porto Alegre",
    },
    {
      alt: "Foto de imagem de perfil de um homem olhando pra cima com blusa branca",
      name: "Lucas Costa - SC",
      text: "A transformação dos espaços masculinos em centros de cuidado é uma resposta à demanda por produtos e tratamentos específicos para o público masculino.",
      company: "Homem Vogue - Florianópolis",
    },
    {
      alt: "Foto de imagem de perfil de um homem de camisa preta com fundo branco",
      name: "Gustavo Nunes - BA",
      text: "Oferecemos aos homens a oportunidade de cuidar de si mesmos de maneira holística, em um ambiente projetado para seu conforto e bem-estar.",
      company: "Macho Moderno - Salvador",
    },
    {
      alt: "Foto de imagem de perfil de um homem com camisa cor de vinho escuro olhando para o lado",
      name: "Fernando Oliveira - CE",
      text: "Os homens de hoje valorizam a estética e o autocuidado, e nossos centros de cuidado masculino atendem a essa necessidade com excelência.",
      company: "Estilo Másculo - Fortaleza",
    },
  ];
  return (
    <>
      <div className="page-background-comments page-layout-1x">
        <div className="grid-home-width py-32 mx-auto h-full flex flex-col justify-center-cente gap-24">
          <h2 className="text-3xl text-white font-bold text-center">
            Comentários
          </h2>
          <div>
            <Swiper
              navigation={true}
              loop={true}
              modules={[Navigation]}
              slidesPerView={1}
            >
              {comments.map((comment, index) => (
                <SwiperSlide key={index} className="text-white">
                  <div className="mx-20">
                    {/* Seus dados do comentário aqui */}
                    <img
                      className="mx-auto mb-5"
                      src={`src/assets/configs/img/img-perfil/img-perfil-${index}.png`}
                      alt={comment.alt}
                    />
                    <div className="text-center">
                      <h3 className="text-2xl mb-6">{comment.name}</h3>
                      <p className="text-xl mb-14">{comment.text}</p>
                      <p className="text-xl">{comment.company}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
