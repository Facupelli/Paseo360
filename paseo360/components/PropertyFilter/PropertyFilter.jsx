import { useState } from "react";
import { departamentos } from "assets/departamentos";
import s from "./PropertyFilter.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import MoreFilters from "./MoreFilters/MoreFilters";
import Register from "pages/register";
import axios from "axios";

export default function PropertyFilter({ setProperties }) {
  const [showMoreFilter, setShowMoreFilters] = useState(false);

  const handleShowMoreFilter = () => {
    setShowMoreFilters(true);
  };

  const methods = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const {
      property_type,
      operation_type,
      departamento,
      price_start,
      price_end,
      currency,
    } = data;
    let url = `/properties?property_type=${property_type}&operation_type=${operation_type}&departamento=${departamento}&currency=${currency}`;
    if (price_start) {
      url = `${url}&price_start=${price_start}`;
    }
    if (price_end) {
      url = `${url}&price_end=${price_end}`;
    }
    axios
      .get(url)
      .then((res) => setProperties(res.data))
      .catch((e) => console.log(e));
  };

  return (
    <div className={s.container}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="type">Tipo: </label>
            <select
              id="type"
              defaultValue="all"
              {...methods.register("property_type")}
            >
              <option value="all">Todos</option>
              <option value="Casa">Casa</option>
              <option value="Departamento">Departamento</option>
              <option value="Terreno">Terreno</option>
              <option value="Local">Local</option>
              <option value="Quinta">Quinta</option>
              <option value="Otro">Otro</option>
            </select>
            <label htmlFor="operation">Operacion: </label>
            <select
              id="operation"
              defaultValue="all"
              {...methods.register("operation_type")}
            >
              <option value="all">Todos</option>
              <option value="Alquiler">Alquiler</option>
              <option value="Venta">Venta</option>
            </select>
            <label htmlFor="departamento">Departamento: </label>
            <select
              id="departamento"
              defaultValue="all"
              {...methods.register("departamento")}
            >
              <option value="all">Todos</option>
              {departamentos &&
                departamentos
                  .sort((a, b) => a.nombre.localeCompare(b.nombre))
                  .map((departamento) => (
                    <option key={departamento.id} value={departamento.nombre}>
                      {departamento.nombre}
                    </option>
                  ))}
            </select>
            <label htmlFor="real_estate">Inmobiliaria: </label>
            <select
              id="real_estate"
              defaultValue="all"
              {...methods.register("real_estate")}
            >
              <option value="all">Todos</option>
            </select>
          </div>

          <div className={s.price_range}>
            <label htmlFor="price_start">Precio Desde:</label>
            <input
              type="text"
              id="price_start"
              {...methods.register("price_start")}
            />
            <label htmlFor="price_end">Precio hasta:</label>
            <input
              type="text"
              id="price_end"
              {...methods.register("price_end")}
            />
            <div>
              <select
                name="currency"
                defaultValue="all"
                {...methods.register("currency")}
              >
                <option value="all">Todos</option>
                <option value="ARS">Pesos</option>
                <option value="USD">Dólares</option>
              </select>
            </div>
          </div>

          {!showMoreFilter && <p onClick={handleShowMoreFilter}>Mas Filtros</p>}

          {showMoreFilter && <MoreFilters />}

          <button>Buscar</button>
        </form>
      </FormProvider>
    </div>
  );
}
