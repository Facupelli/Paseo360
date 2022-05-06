import { useFormContext } from "react-hook-form";
import s from "./MoreFilters.module.scss";

export default function MoreFilters() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={s.container}>
      <div>
        <div>
          <label htmlFor="garage">Antiguedad</label>
        </div>
        <div className={s.antique_input_container}>
          <input type="button" id="1" value="Hasta 5 años" />
          <input type="button" id="2" value="Entre 5 y 10 años" />
          <input type="button" id="3" value="Entre 10 y 20 años" />
          <input type="button" id="4" value="Entre 20 y 50 años" />
          <input type="button" id="5" value="Más de 50 años" />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="ambiences">Ambientes</label>
        </div>
        <div className={s.ambiences_input_container}>
          <input type="button" id="1" value="1" />
          <input type="button" id="2" value="2" />
          <input type="button" id="3" value="3" />
          <input type="button" id="4" value="4" />
          <input type="button" id="5" value="5" />
          <input type="button" id="6" value="+6" />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="bedrooms">Dormitorios</label>
        </div>
        <div className={s.ambiences_input_container}>
          <input type="button" id="1" value="1" />
          <input type="button" id="2" value="2" />
          <input type="button" id="3" value="3" />
          <input type="button" id="4" value="4" />
          <input type="button" id="5" value="+5" />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="bathrooms">Baños</label>
        </div>
        <div className={s.ambiences_input_container}>
          <input type="button" id="1" value="1" />
          <input type="button" id="2" value="2" />
          <input type="button" id="3" value="3" />
          <input type="button" id="4" value="+4" />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="garage">Garage</label>
        </div>
        <div className={s.ambiences_input_container}>
          <input type="button" id="1" value="1" />
          <input type="button" id="2" value="2" />
          <input type="button" id="3" value="3" />
          <input type="button" id="4" value="4" />
          <input type="button" id="5" value="+5" />
        </div>
      </div>
      <div>
        <div>
          <p>Superficie Total</p>
        </div>
        <div className={s.range_container}>
          <label htmlFor="total_area_start">Desde: </label>
          <input type="text" id="total_area_start" />
          <label htmlFor="total_area_end">Hasta: </label>
          <input type="text" id="total_area_end" />
        </div>
      </div>
      <div>
        <div>
          <p>Superficie Cubierta</p>
        </div>
        <div className={s.range_container}>
          <label htmlFor="cover_area_start">Desde: </label>
          <input type="text" id="cover_area_start" />
          <label htmlFor="cover_area_end">Hasta: </label>
          <input type="text" id="cover_area_end" />
        </div>
      </div>
    </div>
  );
}
