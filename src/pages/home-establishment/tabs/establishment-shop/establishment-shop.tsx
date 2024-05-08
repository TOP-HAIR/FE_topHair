import React, { useEffect, useState } from "react";
import { Card, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import {
  getEmpresaContext,
  putEstablishmentContext,
} from "../../../../shared/contexts/empresaContext";
import LoaderResponse from "../../../../components/loaderResponse";
import Swal from "sweetalert2";
export default function HomeShop() {
  const { handleSubmit, register, setValue } = useForm<any>();
  const [loadResponse, setloadResponse] = useState(false);
  const [bannerFile, setBannerFile] = useState<File | null>(null);
  const [fotoFile, setFotoFile] = useState<File | null>(null);
  const [bannerImageUrl, setBannerImageUrl] = useState<string | null>(null);
  const [fotoImageUrl, setFotoImageUrl] = useState<string | null>(null);

  const handleBannerFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    setBannerFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setBannerImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFotoFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setFotoFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFotoImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    async function listarUsuarioById() {
      setloadResponse(false);
      try {
        const jsonEmpresa = sessionStorage.getItem("dataEmpresa");
        if (jsonEmpresa !== null) {
          const res = await getEmpresaContext(
            JSON.parse(jsonEmpresa).idEmpresa
          );
          console.log(res);
          setValue("razaoSocial", res.data?.razaoSocial);
          setValue("img_foto", res.data?.arquivo[0].nomeArquivoOriginal);
          setValue("img_banner", res.data?.arquivo[1].nomeArquivoOriginal);

          setloadResponse(true);
        }
      } catch (error) {
        setloadResponse(true);
        console.error("Erro ao buscar serviços:", error);
      }
    }
    listarUsuarioById();
  }, []);

  const onSubmit = async (data, event) => {
    event && event.preventDefault();
    console.log(data);
    Swal.fire({
      title: "Tem certeza que deseja atualizar o perfil do estabelecimento?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Atualizar!",
      cancelButtonText: "Cancelar",
      reverseButtons: false,
      width: 450,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await putEstablishmentContext(data).then((response) => {
            Swal.fire(
              "Success",
              "Sucesso ao atualizar perfil Estabelecimento.",
              "success"
            );

            console.log(response);
          });
        } catch (error) {
          console.error("Erro ao atualizar o perfil estabelecimento:", error);
          Swal.fire(
            "Erro",
            "Erro ao atualizar o perfil estabelecimento.",
            "error"
          );
        }
      }
    });
  };

  return (
    <>
      <section className="w-full">
        <Card className="h-full m-5">
          <h2 className="m-6 text-2xl font-bold">Perfil do Estabelecimento</h2>
          <div className="m-6">
            {!loadResponse ? (
              <LoaderResponse />
            ) : (
              <form
                className="max-w-screen-lg text-center flex flex-col gap-12"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="w-full flex flex-col gap-12">
                  <div className="flex wrap gap-6 justify-between">
                    <div className="flex flex-col w-2/3 gap-12">
                      <TextField
                        id="outlined-basic"
                        label="Nome estabelecimento"
                        variant="outlined"
                        placeholder="Digite o nome do seu estabelecimento"
                        size="small"
                        {...register("razaoSocial")}
                      />

                      <div>
                        <h2 className="m-0 flex self-start font-bold mb-2">
                          Foto do perfil
                        </h2>
                        <div className="flex-row gap-2">
                          <label className="pointer flex gap-2.5 flex-col justify-center items-center border-dashed border-2 border-gray-400">
                            <span className="drop-title">Drop files here</span>
                            or
                            <input
                              type="file"
                              accept="image/*"
                              {...register("img_foto")}
                              onChange={handleFotoFileChange}
                            />
                          </label>
                          {fotoImageUrl && (
                            <img
                              src={fotoImageUrl}
                              alt="Foto do Perfil"
                              className="image-preview-foto"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <TextField
                    id="outlined-basic"
                    label="Descrição perfil"
                    variant="outlined"
                    multiline
                    size="small"
                    rows={8}
                    placeholder="Descreva o perfil do seu estabelecimento"
                  /> */}
                </div>
                <div>
                  <h2 className="m-0 flex self-start font-bold mb-2">
                    Foto do Banner
                  </h2>
                  <label className="pointer flex gap-2.5 flex-col justify-center items-center border-dashed border-2 border-gray-400">
                    <span className="drop-title">Drop files here</span>
                    or
                    <input
                      type="file"
                      accept="image/*"
                      {...register("img_banner")}
                      onChange={handleBannerFileChange}
                    />
                  </label>
                  {bannerImageUrl && (
                    <img
                      src={bannerImageUrl}
                      alt="Banner"
                      className="image-preview"
                    />
                  )}
                </div>

                <div className="flex justify-between">
                  {/* <Button className="w-48" variant="outlined">
                    Visualizar
                  </Button> */}
                  <Button className="w-48" variant="contained" type="submit">
                    Atualizar perfil
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Card>
      </section>
    </>
  );
}
