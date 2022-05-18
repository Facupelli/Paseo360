import axios from "axios";
import React from "react";
import s from "./OrderBy.module.scss";

export default function OrderBy({ setFilters, filters, setProperties }) {
  const handleChangeOrder = async (e) => {
    setFilters((prev) => ({ ...prev, order: e.target.value }));
    const {
      property_type,
      operation_type,
      departamento,
      real_estate,
      price_start,
      price_end,
      currency,
    } = filters;
    let url = `/properties?property_type=${property_type}&operation_type=${operation_type}&departamento=${departamento}&real_estate=${real_estate}&currency=${currency}&order=${e.target.value}`;
    if (price_start) {
      url = `${url}&price_start=${price_start}`;
    }
    if (price_end) {
      url = `${url}&price_end=${price_end}`;
    }
    console.log(url)
    axios.get(url).then((res) => {
      setProperties(res.data.properties);
      console.log('set properties 4')
    });
  };

  return (
    <div className={s.container}>
      <p>Ordenar por</p>
      <select defaultValue="relevants" onChange={(e) => handleChangeOrder(e)}>
        <option value="relevants">Más relevantes</option>
        <option value="price_dsc">Mayor precio</option>
        <option value="price_asc">Menor precio</option>
      </select>
    </div>
  );
}
