import React from "react";
import s from "./OrderBy.module.scss";

export default function OrderBy() {
  return (
    <div className={s.container}>
      <p>Ordenar por</p>
      <select defaultValue="relevants">
        <option value="relevants">Más relevantes</option>
        <option value="price_dsc">Mayor precio</option>
        <option value="price_asc">Menor precio</option>
      </select>
    </div>
  );
}
