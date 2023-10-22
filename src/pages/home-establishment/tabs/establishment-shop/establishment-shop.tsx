import React from "react";
import { Card } from "@mui/material";
import imgEstablishment from '../../../../assets/configs/img/wllpc.jpg';
import './shop.css'
import imgIconEstablish from '../../../../assets/configs/img/zerotwo2.jpg';
import imgIconEstrela from '../../../../assets/configs/img/estrela-icon.png';

export default function HomeShop() {
  return (
    <>
      <div className="w-full">
        <Card className="m-4">
          <h2 className="m-6 text-2xl font-bold">Perfil do Estabelecimento</h2>
          <div className="m-6">
            <div className="w-full shadow-xl rounded-md div-items-shop-establish">
                <div className="w-full h-2/4">
                  <img className="h-full
                  w-full
                  rounded-t-md"
                  src={imgEstablishment} alt="img-establishment"  />
                </div>
                <div className="w-full h-2/4 flex flex-row items-center justify-center">
                  <div className="">
                    <img className="icon-shop-establish" src={imgIconEstablish} alt="pessoa-icon" />
                  </div>

                  <div className="ml-2 w-3/4 card-shop-title-subtitle flex justify-between flex-col">
                    <div>
                    <h2 className="text-3xl font-bold">Cabeleleiro Fkaska cahnger</h2>
                    <div className="w-full flex flex-row items-center">
                    <img className="icon-estrela-shop" src={imgIconEstrela} alt="icon Estrela" />
                    <img className="icon-estrela-shop" src={imgIconEstrela} alt="icon Estrela" />
                    <img className="icon-estrela-shop" src={imgIconEstrela} alt="icon Estrela" />
                    <img className="icon-estrela-shop" src={imgIconEstrela} alt="icon Estrela" />
                    <img className="icon-estrela-shop" src={imgIconEstrela} alt="icon Estrela" />
                    <h2 className="text-2xl mt-1 ml-2">5.0</h2>
                    </div>
                    </div>
                    <p className="text-lg w-2/4 font-bold mt-4">Serviços:</p>
                    <p className="text-base w-2/4">Cabelo masculino, Cabelo feminino, Luzes, Progressiva, Sobrancelha, Barba.</p>
                  </div>
                </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
