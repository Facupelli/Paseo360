import { useFormContext } from "react-hook-form";
import s from "./MoreFilters.module.scss";

export default function MoreFilters({ setShowMoreFilters }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <p className={s.hide_filters} onClick={() => setShowMoreFilters(false)}>
        ^
      </p>
      <div>
        <label htmlFor="garage">Año Construcción: </label>
      </div>
      <div>
        <label htmlFor="ambiences">Ambientes: </label>
      </div>
      <div>
        <label htmlFor="bedrooms">Dormitorios: </label>
      </div>
      <div>
        <label htmlFor="bathrooms">Baños: </label>
      </div>
      <div>
        <label htmlFor="garage">Garage: </label>
      </div>
      <div>
        <p>Superficie Total:</p>
        <div>
          <label htmlFor="total_area_start">Desde: </label>
          <input type="text" id="total_area_start" />
        </div>
        <div>
          <label htmlFor="total_area_end">Hasta: </label>
          <input type="text" id="total_area_end" />
        </div>
      </div>
      <div>
        <p>Superficie Cubierta:</p>
        <div>
          <label htmlFor="cover_area_start">Desde: </label>
          <input type="text" id="cover_area_start" />
        </div>
        <div>
          <label htmlFor="cover_area_end">Hasta: </label>
          <input type="text" id="cover_area_end" />
        </div>
      </div>
    </>
  );
}
