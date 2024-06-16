import React, { useEffect, useState } from "react";
import { Card, TextField, Button } from "@mui/material";
import { AgendaRelatorio } from "../../../../../shared/entity/agenda";
import { getAgendaRelatoriosContext } from "../../../../../shared/contexts/agendaContext";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SubmitHandler, useForm } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
import ReportDashboard from "../reports-dashboard/report-dashboard";

interface IFormInputs {
  dataInicio: Dayjs | null;
  dataFim: Dayjs | null;
}

export default function ReportList() {
  const [loadResponse, setLoadResponse] = useState(false);
  const [resLengthValid, setResLengthValid] = useState(false);
  const [ultimosRelatorios, setUltimosRelatorios] =
    useState<AgendaRelatorio[]>();

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<{
    dataInicio: string | null;
    dataFim: string | null;
  }>({
    dataInicio: null,
    dataFim: null,
  });

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues: {
      dataInicio: null,
      dataFim: null,
    },
  });

  const handleFilterClick = () => {
    setIsFormSubmitted(false);
    setTimeout(() => {
      setIsFormSubmitted(true);
    }, 0);
  };

  const onSubmit: SubmitHandler<IFormInputs> = (data, event) => {
    if (event) {
      event.preventDefault();
    }
    const formattedData = {
      dataInicio: data.dataInicio
        ? dayjs(data.dataInicio).format("YYYY-MM-DD")
        : null,
      dataFim: data.dataFim ? dayjs(data.dataFim).format("YYYY-MM-DD") : null,
    };
    setFormData(formattedData);

    handleFilterClick();
    if (IsFormSubmitted) {
      setIsFormSubmitted(false);
    }
    setIsFormSubmitted(true);
  };

  return (
    <>
      <Card className="m-5">
        <h2 className="m-6 text-2xl font-bold">Relatório do Estabelecimento</h2>
        <div className="m-6">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex w-full row gap-4 flex-wrap justify-between"
            >
              <div className="gap-12 flex">
                <DatePicker
                  className="w-96"
                  label="Data Início"
                  renderInput={(params) => <TextField {...params} />}
                  onChange={(newValue) => setValue("dataInicio", newValue)}
                />
                {errors.dataInicio && <p>{errors.dataInicio.message}</p>}
                <DatePicker
                  className="w-96"
                  label="Data Final"
                  renderInput={(params) => <TextField {...params} />}
                  onChange={(newValue) => setValue("dataFim", newValue)}
                />
                {errors.dataFim && <p>{errors.dataFim.message}</p>}
              </div>

              <Button
                className="float-start w-72 bg-primary-aqua h-14 "
                variant="contained"
                type="submit"
              >
                Filtrar
              </Button>
            </form>
          </LocalizationProvider>
        </div>
      </Card>
      {isFormSubmitted && (
        <ReportDashboard
          dataInicio={formData.dataInicio}
          dataFim={formData.dataFim}
        />
      )}
    </>
  );
}
