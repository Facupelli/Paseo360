import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import postPropertySchema from "validationSchemas/postProperty";

export default function postProperty() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(postPropertySchema) });

  const onSubmit = async (data) => {
    const res = await axios.post("/properties", data, {
        headers: {
            // "authorization": `Bearer ${token}`
        }
    }).catch((e) => {
      if (e.response) {
        console.log(e.response.data);
      }
    });
    console.log(res);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre:</label>
          <input
            {...register("name")}
            type="text"
            placeholder="casa de campo"
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label>Tipo de Propiedad:</label>
          <select {...register("property_type")}>
            <option>Casa</option>
            <option>Departamento</option>
            <option>Terreno</option>
            <option>Local</option>
            <option>Quinta</option>
            <option>Otro</option>
          </select>
          {errors.currency && <span>{errors.currency.message}</span>}
        </div>
        <div>
          <label>Precio:</label>
          <input {...register("price")} type="text" placeholder="150000" />
          {errors.price && <span>{errors.price.message}</span>}
        </div>
        <div>
          <select {...register("currency")}>
            <option>Pesos</option>
            <option>Dólares</option>
          </select>
          {errors.currency && <span>{errors.currency.message}</span>}
        </div>
        <div>
          <label>Descripción:</label>
          <input
            {...register("description")}
            type="text"
            placeholder="casa linda de verano"
          />
          {errors.description && <span>{errors.description.message}</span>}
        </div>
        <div>
          <label>Superficie Total:</label>
          <input {...register("total_area")} type="text" placeholder="1200" />
          {errors.total_area && <span>{errors.total_area.message}</span>}
        </div>
        <div>
          <label>Superficie Cubierta:</label>
          <input {...register("cover_area")} type="text" placeholder="700" />
          {errors.cover_area && <span>{errors.cover_area.message}</span>}
        </div>
        <div>
          <label>Ambientes:</label>
          <input {...register("ambiences")} type="text" placeholder="10" />
          {errors.ambiences && <span>{errors.ambiences.message}</span>}
        </div>
        <div>
          <label>Año de Construción:</label>
          <input {...register("year_built")} type="text" placeholder="2005" />
          {errors.year_built && <span>{errors.year_built.message}</span>}
        </div>
        <div>
          <label>Dormitorios:</label>
          <input {...register("bedrooms")} type="text" placeholder="5" />
          {errors.bedrooms && <span>{errors.bedrooms.message}</span>}
        </div>
        <div>
          <label>Baños:</label>
          <input {...register("bathrooms")} type="text" placeholder="3" />
          {errors.bathrooms && <span>{errors.bathrooms.message}</span>}
        </div>
        <div>
          <label>Garages:</label>
          <input {...register("garage")} type="text" placeholder="4" />
          {errors.garage && <span>{errors.garage.message}</span>}
        </div>
        <button>Publicar</button>
      </form>
    </div>
  );
}
