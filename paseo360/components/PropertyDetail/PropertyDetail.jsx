import Multimedia from "./Multimedia/Multimedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faUpRightAndDownLeftFromCenter,
  faBed,
  faToilet,
  faCar,
  faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";
import s from "./PropertyDetail.module.scss";

export default function PropertyDetail({ property }) {
  return (
    <div className={s.container}>
      <Multimedia
        propertyName={property.name}
        propertyImages={property.images}
        tour_images={property.tour_images}
      />
      <div className={s.info_container}>
        <div className={s.operation}>
          <p>{property.operation_type}</p>
        </div>
        <div className={s.price}>
          <p>{property.price}</p>
          <p>{property.currency}</p>
        </div>
        <div className={s.info}>
          <p>
            <FontAwesomeIcon icon={faCalendar} />{" "}
            <span>{property.year_built}</span> años de antiguedad{" "}
          </p>
          <p>
            <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />{" "}
            <span>{property.total_area}m²</span> area total
          </p>
          <p>
            <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />{" "}
            <span>{property.cover_area}m²</span> area cubierta
          </p>
          <p>
            <FontAwesomeIcon icon={faHouseChimney} />{" "}
            <span>{property.ambiences}</span> ambientes
          </p>
          <p>
            <FontAwesomeIcon icon={faToilet} />{" "}
            <span>{property.bathrooms}</span> baños
          </p>
          <p>
            <FontAwesomeIcon icon={faBed} /> <span>{property.bedrooms}</span>{" "}
            dormitorios
          </p>
          <p>
            <FontAwesomeIcon icon={faCar} /> <span>{property.garage}</span>{" "}
            coches
          </p>
        </div>
      </div>
      <div className={s.description}>
        <p>Descripción</p>
        <p>{property.description}</p>
      </div>
    </div>
  );
}
