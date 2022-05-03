import s from "./PropertyDetail.module.scss";

export default function PropertyDetail({ property }) {
  return (
    <div className={s.container}>
      <div>
        <div className={s.price}>
          <p>{property.price}</p>
          <p>{property.currency}</p>
        </div>
        <div>
          <p>{property.year_built} años de antiguedad</p>
          <p>{property.total_area} area total</p>
          <p>{property.cover_area} area cubierta</p>
          <p>{property.ambiences} ambientes</p>
          <p>{property.bathrooms} baños</p>
          <p>{property.bedrooms} dormitorios</p>
          <p>garage {property.garage} coches</p>
        </div>
      </div>
    </div>
  );
}
