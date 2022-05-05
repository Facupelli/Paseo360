import Image from "next/image";
import Link from "next/link";
import s from "./PropertyCard.module.scss";

export default function PropertyCard({ property }) {
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
              style={{ borderBottomLeftRadius: 2, borderTopLeftRadius: 2 }}
            />
          </div>
          <div className={s.info_container}>
            <Link href={`/properties/${property._id}`}>
              <p className={s.title}>{property.name}</p>
            </Link>
            <p className={s.adress}>{property.adress}</p>
            <div className={s.price}>
              <p>{property.price}</p>
              <p>{property.currency}</p>
              <p>{property.operation_type}</p>
            </div>
            <div className={s.property_info}>
              <div className={s.area}>
                <p>
                  <span>{property.total_area}</span>m² totales
                </p>
                <p>
                  <span>{property.cover_area}</span>m² cubiertos
                </p>
              </div>
              <div className={s.ambience}>
                <p>
                  <span>{property.ambiences}</span> ambientes
                </p>
                <p>
                  <span>{property.bathrooms}</span> baños
                </p>
              </div>
              <div className={s.real_estate}>
                {/* <p>{property.realEstateOwner}</p> */}
                <p>{property.realEstateOwnerName}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
