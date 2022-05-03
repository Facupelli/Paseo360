import { useState, useEffect } from "react";

import { NavBar } from "components/NavBar/NavBar";
import Multimedia from "components/PropertyDetail/Multimedia/Multimedia";
import PropertyDetail from "components/PropertyDetail/PropertyDetail";

export default function PropertyDetailPage({ property }) {
  return (
    <>
      <NavBar />
      <Multimedia
        propertyName={property.name}
        propertyImages={property.images}
        tour_images={property.tour_images}
      />
      <PropertyDetail property={property} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  const response = await fetch(`http://localhost:3001/properties/${id}`);
  const property = await response.json();
  return {
    props: { property: property }, // will be passed to the page component as props
  };
}
