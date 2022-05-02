import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import postPropertySchema from "validationSchemas/postProperty";
import s from "./index.module.scss";
import { NavBar } from "components/NavBar/NavBar";
import { departamentos } from "assets/departamentos";

export default function postProperty() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(postPropertySchema) });

  const onSubmit = async (data) => {
    const res = await axios
      .post("/properties", data, {
        headers: {
          // "authorization": `Bearer ${token}`
        },
      })
      .catch((e) => {
        if (e.response) {
          console.log(e.response.data);
        }
      });
    console.log(res);
  };

  return (
    <>
      <NavBar />
      <div className={s.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.grid_container}>
            <div className={s.types}>
              <label>Propiedad:</label>
              <select {...register("property_type")}>
                <option>Casa</option>
                <option>Departamento</option>
                <option>Terreno</option>
                <option>Local</option>
                <option>Quinta</option>
                <option>Otro</option>
              </select>
              {errors.property_type && (
                <span>{errors.property_type.message}</span>
              )}
              <label>Operación:</label>
              <select {...register("operation_type")}>
                <option>Alquiler</option>
                <option>Venta</option>
              </select>
              {errors.operation_type && (
                <span>{errors.operation_type.message}</span>
              )}
            </div>

            <div className={s.name}>
              <label>Nombre:</label>
              <input
                {...register("name")}
                type="text"
                placeholder="casa de campo"
              />
              {errors.name && <span>{errors.name.message}</span>}
            </div>

            <div className={s.price}>
              <label>Precio:</label>
              <input {...register("price")} type="text" placeholder="150000" />
              {errors.price && <span>{errors.price.message}</span>}
              <select {...register("currency")}>
                <option>Pesos</option>
                <option>Dólares</option>
              </select>
              {errors.currency && <span>{errors.currency.message}</span>}
            </div>

            {/* <div>
              <label>Descripción:</label>
              <textarea {...register("description")} type="text" />
              {errors.description && <span>{errors.description.message}</span>}
            </div>

            <div className={s.adress}>
              <div>
                <label>Departamento:</label>
                <select
                  id="departamento"
                  defaultValue="select"
                  {...register("departamento")}
                >
                  <option value="select" disabled>
                    Seleccionar
                  </option>
                  {departamentos &&
                    departamentos
                      .sort((a, b) => a.nombre.localeCompare(b.nombre))
                      .map((departamento) => (
                        <option
                          key={departamento.id}
                          value={departamento.nombre}
                        >
                          {departamento.nombre}
                        </option>
                      ))}
                </select>
                {errors.departamento && (
                  <span>{errors.departamento.message}</span>
                )}
              </div>
              <div>
                <label>Dirección:</label>
                <input
                  {...register("adress")}
                  type="text"
                  placeholder="barrio Huarpe al 206 oeste"
                />
                {errors.adress && <span>{errors.adress.message}</span>}
              </div>
            </div>

            <div>
              <label>Año de Construción:</label>
              <input
                {...register("year_built")}
                type="text"
                placeholder="2005"
              />
              {errors.year_built && <span>{errors.year_built.message}</span>}
            </div> */}

            {/* <div className={s.property_info}>
              <div className={s.column}>
                <label>Superficie Total:</label>
                <input
                  {...register("total_area")}
                  type="text"
                  placeholder="1200"
                />
                {errors.total_area && <span>{errors.total_area.message}</span>}
                <label>Superficie Cubierta:</label>
                <input
                  {...register("cover_area")}
                  type="text"
                  placeholder="700"
                />
                {errors.cover_area && <span>{errors.cover_area.message}</span>}
                <label>Ambientes:</label>
                <input
                  {...register("ambiences")}
                  type="text"
                  placeholder="10"
                />
                {errors.ambiences && <span>{errors.ambiences.message}</span>}
              </div>

              <div className={s.column}>
                <label>Dormitorios:</label>
                <input {...register("bedrooms")} type="text" placeholder="5" />
                {errors.bedrooms && <span>{errors.bedrooms.message}</span>}
                <label>Baños:</label>
                <input {...register("bathrooms")} type="text" placeholder="3" />
                {errors.bathrooms && <span>{errors.bathrooms.message}</span>}
                <label>Garages:</label>
                <input {...register("garage")} type="text" placeholder="4" />
                {errors.garage && <span>{errors.garage.message}</span>}
              </div>
            </div>

            <div className={s.button_container}>
              <button>Siguiente</button>
            </div> */}
          </div>
        </form>
      </div>
    </>
  );
}
