import Image from "next/image";
import s from "./PropertyCard.module.scss";

export default function PropertyCard({ property }) {
  console.log(property);
  return (
    <>
      {property && (
        <div className={s.card_container}>
          <div className={s.image_container}>
            <Image
              src={property.base_image}
              alt={property.name}
              width={300}
              height={210}
            />
          </div>
          <div className={s.info_container}>
            <p className={s.title}>{property.name}</p>
            <p className={s.adress}>{property.adress}</p>
            <div className={s.price}>
              <p>{property.price}</p>
              <p>{property.currency === 'Pesos' ? "ARS" : "USD"}</p>
            </div>
            <div className={s.property_info}>
              <div className={s.area}>
                <p><span>{property.total_area}</span>m² totales</p>
                <p><span>{property.cover_area}</span>m² cubiertos</p>
              </div>
              <div className={s.ambience}>
                <p><span>{property.ambiences}</span> ambientes</p>
                <p><span>{property.bathrooms}</span> baños</p>
              </div>
              <div className={s.real_estate}>
                HABITAR
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
