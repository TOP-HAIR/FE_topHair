import React from "react";
import TophairIcon from "../../../../assets/configs/img/logo/white-logo.png";
import  EmailIcon  from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';


export const Loginpage = () => {
    return(
        <>
            <div className="h-screen w-screen flex justify-center items-center">
                <div className="login-modal bg-primary-dark-cyan rounded-lg flex justify-center items-center flex-col">
                    <div className="w-full mt-2">
                    <a href="/" className="text-white ml-3.5 text-sm text-cyan-400"><u>Voltar para o site</u></a>
                    </div>
                    <div className="h-full w-full">
                        <div className="w-full flex mt-4 justify-center">
                        <img className="h-28 w-28" src={TophairIcon} alt="tophair-icon" />
                        </div>
                        <div className="w-full h-80 text-white flex justify-center items-center flex-col">
                            <div className="w-4/5 flex-col">
                            <label htmlFor="Email:"><EmailIcon fontSize="small" className="mb-1 mr-1"/>Email:</label>
                            <input className="input-login w-full text-black h-8 mb-6 rounded-sm"
                             type="text" placeholder="Digite aqui seu Email" />
                             </div>
                             <div className="w-4/5 flex-col">
                            <label htmlFor="Email:"><LockIcon fontSize="small" className="mb-1 mr-1"/>Senha:</label>
                            <input className="input-login w-full text-black h-8 mb-6 rounded-sm"
                             type="password" placeholder="Digite aqui sua Senha" />
                             </div>
                             <div className="w-4/5">
                                <p className="text-white ml-3.5 text-sm mt-2">Ainda não tem uma conta ? <a className="text-cyan-400" href="/"><u>faça seu cadastro aqui</u></a></p>
                                <button className="w-full bg-primary-cyan h-9 mt-6 rounded-sm" type="button">ENTRAR</button>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loginpage;