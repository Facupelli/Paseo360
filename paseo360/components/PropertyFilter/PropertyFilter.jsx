import { useState } from "react";
import { departamentos } from "assets/departamentos";
import s from "./PropertyFilter.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import MoreFilters from "./MoreFilters/MoreFilters";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function PropertyFilter({
  setProperties,
  setLoading,
  realEstates,
  setFilters,
}) {
  const [showMoreFilter, setShowMoreFilters] = useState(false);

  const handleShowMoreFilter = () => {
    setShowMoreFilters(true);
  };

  const methods = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    console.log(data);
    const {
      property_type,
      operation_type,
      departamento,
      real_estate,
      price_start,
      price_end,
      currency,
    } = data;
    let url = `/properties?property_type=${property_type}&operation_type=${operation_type}&departamento=${departamento}&real_estate=${real_estate}&currency=${currency}`;
    if (price_start) {
      url = `${url}&price_start=${price_start}`;
    }
    if (price_end) {
      url = `${url}&price_end=${price_end}`;
    }
    axios
      .get(url)
      .then((res) => {
        setProperties(res.data.properties);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };

  const handleChangeSelect = (e, field) => {
    methods.setValue(field, e.target.value);
    setFilters(prev => ({...prev, [field]: e.target.value}))
    methods.handleSubmit(onSubmit)();
  };

  const handleResetFilters = () => {
    setLoading(true);
    axios
      .get("/properties")
      .then((res) => {
        setProperties(res.data.properties);
        setLoading(false);
        methods.reset();
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };

  return (
    <div className={s.container}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className={s.first_filters}>
            <label htmlFor="type">Tipo: </label>
            <select
              id="type"
              defaultValue="all"
              {...methods.register("property_type")}
              onChange={(e) => handleChangeSelect(e, "property_type")}
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
              onChange={(e) => handleChangeSelect(e, "operation_type")}
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
              onChange={(e) => handleChangeSelect(e, "departamento")}
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
              onChange={(e) => handleChangeSelect(e, "real_estate")}
            >
              <option value="all">Todos</option>
              {realEstates &&
                realEstates.map((realEstate) => (
                  <option key={realEstate} value={realEstate}>
                    {realEstate}
                  </option>
                ))}
            </select>
          </div>

          <div className={s.price_range}>
            <label htmlFor="price_start">Precio Desde:</label>
            <input
              type="text"
              id="price_start"
              {...methods.register("price_start")}
              placeholder="precio"
            />
            <label htmlFor="price_end">Precio hasta:</label>
            <input
              type="text"
              id="price_end"
              {...methods.register("price_end")}
              placeholder="precio"
            />
            <div>
              <select
                name="currency"
                defaultValue="all"
                {...methods.register("currency")}
                onChange={(e) => handleChangeSelect(e, "currency")}
              >
                <option value="all">Todos</option>
                <option value="ARS">Pesos</option>
                <option value="USD">Dólares</option>
              </select>
            </div>
          </div>

          {/* {!showMoreFilter && (
            <div className={s.showmore_btn_container}>
              <button type="button" onClick={handleShowMoreFilter}>
                Más filtros<FontAwesomeIcon icon={faArrowDown} style={{ width: "18px", height: "18px" }} />
              </button>
            </div>
          )} */}

          {/* {showMoreFilter && ( */}
            <MoreFilters setShowMoreFilters={setShowMoreFilters} />
          {/*  )} */}

          <div className={s.search_btn_container}>
            <button>Buscar</button>
            <button type="button" onClick={handleResetFilters}>
              Limpiar Filtros
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
