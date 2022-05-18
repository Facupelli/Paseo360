import axios from "axios";
import React from "react";
import s from "./OrderBy.module.scss";

export default function OrderBy({ setFilters, filters, setProperties, url }) {
  const handleChangeOrder = async (e) => {
    let orderUrl = `${url}&order=${e.target.value}`;

    console.log(orderUrl);
    axios.get(orderUrl).then((res) => {
      setProperties(res.data.properties);
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
