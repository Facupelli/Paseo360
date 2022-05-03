import s from './PropertyDetail.module.scss'

export default function PropertyDetail({ property }) {
  return (
    <div className={s.container}>
      <p>{property.name}</p>
      <p>{property.price}</p>
      <p>{property.currency}</p>
    </div>
  );
}
