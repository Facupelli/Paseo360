import Image from "next/image";
import s from "./PropertyCard.module.scss";

export default function PropertyCard({ property }) {
  console.log(property);
  return (
    <>
      {property && (
        <div className={s.card_container}>
          <div>
            <Image
              src={property.base_image}
              alt={property.name}
              width={300}
              height={210}
            />
          </div>
          <div>
            <p>{property.name}</p>
            <p>{property.adress}</p>
            <div className={s.price}>
              <p>{property.price}</p>
              <p>{property.currency === 'Pesos' ? "ARS" : "USD"}</p>
            </div>
            <div className={s.property_info}>
              <div className={s.area}>
                <p>{property.total_area} m² totales</p>
                <p>{property.cover_area} m² cubiertos</p>
              </div>
              <div className={s.ambience}>
                <p>{property.ambiences} ambientes</p>
                <p>{property.bathrooms} baños</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
