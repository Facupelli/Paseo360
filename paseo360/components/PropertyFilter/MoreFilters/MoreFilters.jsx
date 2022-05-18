import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";

import s from "./MoreFilters.module.scss";

dayjs.extend(customParseFormat);

export default function MoreFilters({ setFilters }) {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const date = dayjs().format("DD/MM/YYYY");

  useEffect(() => {
    setFilters((prev) => ({ ...prev, date: date.split("/")[2] }));
  }, []);

  const antiquity = watch("antiquity");
  const ambiences = watch("ambiences");
  const bedrooms = watch("bedrooms");
  const bathrooms = watch("bathrooms");
  const garage = watch("garage");
  const total_start = watch("total_area_start");
  const total_end = watch("total_area_end");
  const cover_start = watch("cover_area_start");
  const cover_end = watch("cover_area_end");

  const setFilterValue = (filterName, filterValue, lastValue) => {
    if (filterValue) {
      if (filterValue.includes(lastValue)) {
        // setFilters((prev) => ({ ...prev, [filterName]: lastValue }));
        setValue(filterName, lastValue);
      }
    }
  };

  useEffect(() => {
    setFilterValue("antiquity", antiquity, "more50");
  }, [antiquity]);

  // console.log("ANTIQUITY", antiquity, typeof antiquity);

  useEffect(() => {
    setFilterValue("ambiences", ambiences, "more6");
  }, [ambiences]);

  useEffect(() => {
    setFilterValue("bedrooms", bedrooms, "more5");
  }, [bedrooms]);

  useEffect(() => {
    setFilterValue("bathrooms", bathrooms, "more4");
  }, [bathrooms]);

  useEffect(() => {
    setFilterValue("garage", garage, "more5");
  }, [garage]);

  // useEffect(() => {
  //   setFilters((prev) => ({
  //     ...prev,
  //     total_area_start: total_start,
  //     total_area_end: total_end,
  //   }));
  // }, [total_start, total_end]);

  // useEffect(() => {
  //   setFilters((prev) => ({
  //     ...prev,
  //     cover_area_start: cover_start,
  //     cover_area_end: cover_end,
  //   }));
  // }, [cover_start, cover_end]);

  const handleAntiquity = (e) => {
    if (antiquity === e.target.value) {
      setValue("antiquity", "");
    } else {
      setValue("antiquity", e.target.value);
    }
  };

  return (
    <div className={s.container}>
      <div>
        <div>
          <p>Antiguedad</p>
        </div>
        <div className={s.antique_input_container}>
          <button
            value="5"
            type="button"
            onClick={(e) => handleAntiquity(e)}
            className={antiquity === "5" ? s.checked : ""}
          >
            Hasta 5 años
          </button>
          <button
            value="5-10"
            type="button"
            onClick={(e) => handleAntiquity(e)}
            className={antiquity === "5-10" ? s.checked : ""}
          >
            Entre 5 y 10 años
          </button>
          <button
            value="10-20"
            type="button"
            onClick={(e) => handleAntiquity(e)}
            className={antiquity === "10-20" ? s.checked : ""}
          >
            Entre 10 y 20 años
          </button>
          <button
            value="20-50"
            type="button"
            onClick={(e) => handleAntiquity(e)}
            className={antiquity === "20-50" ? s.checked : ""}
          >
            Entre 20 y 50 años
          </button>
          <button
            value="more50"
            type="button"
            onClick={(e) => handleAntiquity(e)}
            className={antiquity === "more50" ? s.checked : ""}
          >
            Más de 50 años
          </button>
        </div>
      </div>
      <div>
        <div>
          <p>Ambientes</p>
        </div>
        <div className={s.ambiences_input_container}>
          <input
            type="checkbox"
            id="ambience1"
            value="1"
            {...register("ambiences")}
          />
          <label htmlFor="ambience1">1</label>
          <input
            type="checkbox"
            id="ambience2"
            value="2"
            {...register("ambiences")}
          />
          <label htmlFor="ambience2">2</label>
          <input
            type="checkbox"
            id="ambience3"
            value="3"
            {...register("ambiences")}
          />
          <label htmlFor="ambience3">3</label>
          <input
            type="checkbox"
            id="ambience4"
            value="4"
            {...register("ambiences")}
          />
          <label htmlFor="ambience4">4</label>
          <input
            type="checkbox"
            id="ambience5"
            value="5"
            {...register("ambiences")}
          />
          <label htmlFor="ambience5">5</label>
          <input
            type="checkbox"
            id="ambience+6"
            value="more6"
            {...register("ambiences")}
          />
          <label htmlFor="ambience+6">+6</label>
        </div>
      </div>
      <div>
        <div>
          <p>Dormitorios</p>
        </div>
        <div className={s.ambiences_input_container}>
          <input
            type="checkbox"
            id="bedroom1"
            value="1"
            {...register("bedrooms")}
          />
          <label htmlFor="bedroom1">1</label>
          <input
            type="checkbox"
            id="bedroom2"
            value="2"
            {...register("bedrooms")}
          />
          <label htmlFor="bedroom2">2</label>
          <input
            type="checkbox"
            id="bedroom3"
            value="3"
            {...register("bedrooms")}
          />
          <label htmlFor="bedroom3">3</label>
          <input
            type="checkbox"
            id="bedroom4"
            value="4"
            {...register("bedrooms")}
          />
          <label htmlFor="bedroom4">4</label>
          <input
            type="checkbox"
            id="bedroom+5"
            value="more5"
            {...register("bedrooms")}
          />
          <label htmlFor="bedroom+5">+5</label>
        </div>
      </div>
      <div>
        <div>
          <p>Baños</p>
        </div>
        <div className={s.ambiences_input_container}>
          <input
            type="checkbox"
            id="bathroom1"
            value="1"
            {...register("bathrooms")}
          />
          <label htmlFor="bathroom1">1</label>
          <input
            type="checkbox"
            id="bathroom2"
            value="2"
            {...register("bathrooms")}
          />
          <label htmlFor="bathroom2">2</label>
          <input
            type="checkbox"
            id="bathroom3"
            value="3"
            {...register("bathrooms")}
          />
          <label htmlFor="bathroom3">3</label>
          <input
            type="checkbox"
            id="bathroom+4"
            value="more4"
            {...register("bathrooms")}
          />
          <label htmlFor="bathroom+4">+4</label>
        </div>
      </div>
      <div>
        <div>
          <p>Garage</p>
        </div>
        <div className={s.ambiences_input_container}>
          <input
            type="checkbox"
            id="garage1"
            value="1"
            {...register("garage")}
          />
          <label htmlFor="garage1">1</label>
          <input
            type="checkbox"
            id="garage2"
            value="2"
            {...register("garage")}
          />
          <label htmlFor="garage2">2</label>
          <input
            type="checkbox"
            id="garage3"
            value="3"
            {...register("garage")}
          />
          <label htmlFor="garage3">3</label>
          <input
            type="checkbox"
            id="garage4"
            value="4"
            {...register("garage")}
          />
          <label htmlFor="garage4">4</label>
          <input
            type="checkbox"
            id="garage+5"
            value="more5"
            {...register("garage")}
          />
          <label htmlFor="garage+5">+5</label>
        </div>
      </div>
      <div>
        <div>
          <p>Superficie Total</p>
        </div>
        <div className={s.range_container}>
          <label htmlFor="total_area_start">Desde: </label>
          <input
            type="text"
            id="total_area_start"
            {...register("total_area_start")}
          />
          <label htmlFor="total_area_end">Hasta: </label>
          <input
            type="text"
            id="total_area_end"
            {...register("total_area_end")}
          />
        </div>
      </div>
      <div>
        <div>
          <p>Superficie Cubierta</p>
        </div>
        <div className={s.range_container}>
          <label htmlFor="cover_area_start">Desde: </label>
          <input
            type="text"
            id="cover_area_start"
            {...register("cover_area_start")}
          />
          <label htmlFor="cover_area_end">Hasta: </label>
          <input
            type="text"
            id="cover_area_end"
            {...register("cover_area_end")}
          />
        </div>
      </div>
    </div>
  );
}
