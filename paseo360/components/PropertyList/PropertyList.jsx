import { useEffect } from "react";
import PropertyCard from "components/PropertyCard/PropertyCard";

export default function PropertyList({ loading, properties, setLoading }) {
  useEffect(() => {
    setLoading(loading);
  }, []);

  return (
    <>
      {properties.length > 0 &&
        properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      {properties.length === 0 && !loading && (
        <p>No se encontraron propiedades</p>
      )}
    </>
  );
}
