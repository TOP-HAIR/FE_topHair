import React from "react";
import TophairIcon from "../../../../assets/configs/img/logo/white-logo.png";


export const Loginpage = () => {
    return(
        <>
            <div className="h-screen w-screen flex justify-center items-center">
                <div className="login-modal bg-primary-dark-cyan rounded-lg flex justify-center items-center flex-col">
                    <div className="w-full">
                    <p className="text-white ml-3.5 text-sm">Voltar para o site</p>
                    </div>
                    <div className="h-4/5 w-full">
                        <div className="w-full flex justify-center items-center">
                        <img className="h-28 w-28" src={TophairIcon} alt="" />
                        </div>
                        <div className="w-full h-full"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loginpage;