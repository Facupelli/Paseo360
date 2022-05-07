import { useEffect } from "react";
import PropertyCard from "components/PropertyCard/PropertyCard";

export default function PropertyList({ loading, properties, setLoading }) {
  useEffect(() => {
    setLoading(loading);
  }, [loading, properties]);

  return (
    <>
      {!loading &&
        properties.length > 0 &&
        properties.map((property) => (
          <div key={property._id} style={{borderBottom: "2px solid rgba(40, 102, 143, 0.103)"}} >

            <PropertyCard property={property} />
          </div>
        ))}
      {!loading && properties.length === 0 && !loading && (
        <p>No se encontraron propiedades</p>
      )}
    </>
  );
}
