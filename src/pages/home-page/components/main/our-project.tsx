import React from "react";

export const OurProject = () => {
  return (
    <>
      <div id="our-project" className="py-32 grid-home-width mx-auto">
        <div className="mx-8 grid gap-44">
          <div className="text-center grid gap-24">
            <div className="grid gap-16">
              <h2 className="text-3xl font-bold">Nosso Projeto?</h2>
              <p className="text-xl drop-shadow-2xl font-normal font-family-dm-sans">
                O nosso projeto foca em ser a ponte entre cliente e barbearia, o
                objetivo da aplicação é permitir que os usuários pesquisem
                estabelecimentos próximos localmente,e tenham a possibilidade de
                agendarem serviços com profissionais especializados em suas
                determinadas áreas. A aplicação também fornece recursos para que
                os estabelecimentos gerenciem seus agendamentos e promovam seus
                serviços, tendo como a customização do próprio perfil.
              </p>
            </div>
            <img
              className="rounded-xl shadow-about-us"
              src="../../../../src/assets/configs/img/our-project-image-1.png"
              alt="Imagem do google maps"
            />
          </div>

          <div className="grid grid-rows-2 max-lg:gap-24 gap-48">
            <div className="flex flex-col text-center">
              <div className="grid grid-cols-2 max-md:grid-cols-1 max-lg:gap-24 gap-48">
                <div className="grid gap-24">
                  <div className="grid gap-16">
                    <h2 className="color-terciary-light-green text-2xl font-bold drop-shadow-2xl">
                      Funcionalidades do cliente
                    </h2>
                    <p className="text-xl drop-shadow-2xl font-normal font-family-dm-sans">
                      Procure o serviço ideal sem preocupações e dores de
                      cabeça, agende um horário com rapidez. Visualize
                      avaliações, comentários e quais serviços um barbeiro pode
                      oferecer. Tenha uma busca personalizada de acordo com a
                      sua preferência.
                    </p>
                  </div>
                  <div className="grid gap-20">
                    <div className="grid gap-8">
                      <img
                        className="mx-auto"
                        src="./src/assets/configs/img/svg/Google Maps Old.svg"
                        alt="Ícone de um mapa"
                      />
                      <p className="text-xl drop-shadow-2xl font-normal font-family-dm-sans">
                        Busca por estabelecimentos próximos ao usuário.
                      </p>
                    </div>
                    <div className="grid gap-8">
                      <img
                        className="mx-auto"
                        src="./src/assets/configs/img/svg/Google Calendar.svg"
                        alt="Ícone de uma calendário"
                      />
                      <p className="text-xl drop-shadow-2xl font-normal font-family-dm-sans">
                        Facilidade e agilidade no processo de realização do
                        agendamento.
                      </p>
                    </div>
                  </div>
                </div>

                <img
                  className="h-full rounded-xl shadow-about-us max-md:mx-auto height-image"
                  src="../../../../src/assets/configs/img/our-project-image-2.png"
                  alt="Imagem de um celular emcima de uma mesa"
                />
              </div>
            </div>

            <div className="flex flex-col text-center">
              <div className="grid grid-cols-2 max-md:grid-cols-1 max-lg:gap-24 gap-48 max-md:flex max-md:flex-col-reverse">
                <img
                  className="h-full rounded-xl shadow-about-us max-md:mx-auto height-image"
                  src="../../../../src/assets/configs/img/our-project-image-3.png"
                  alt="Imagem de alguém mexendo no celular"
                />
                <div className="grid gap-24">
                  <div className="grid gap-16">
                    <h2 className="color-terciary-light-green text-2xl font-bold drop-shadow-2xl">
                      Funcionalidades da barbearia
                    </h2>
                    <p className="text-xl drop-shadow-2xl font-normal font-family-dm-sans">
                      Tenha total controle do seu negócio, dashbaords detalhados
                      e histórico dos serviços prestados com faturamento mensal
                      e mostre o seu serviço para todos, personalisando o seu
                      perfil atraindo mais clientes.
                    </p>
                  </div>
                  <div className="grid gap-20">
                    <div className="grid gap-8">
                      <img
                        className="mx-auto"
                        src="./src/assets/configs/img/svg/Tasklist.svg"
                        alt="Ícone de lista de task"
                      />
                      <p className="text-xl drop-shadow-2xl font-normal font-family-dm-sans">
                        Visibilidade, controle de agendamento, dashboards de
                        faturamento.
                      </p>
                    </div>
                    <div className="grid gap-8">
                      <img
                        className="mx-auto"
                        src="./src/assets/configs/img/svg/Edit.svg"
                        alt="Ícone de edit"
                      />
                      <p className="text-xl drop-shadow-2xl font-normal font-family-dm-sans">
                        Customização de perfil para cada tipo de
                        estabelecimento.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProject;
