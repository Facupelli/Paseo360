import Head from "next/head";
import { NavBar } from "components/NavBar/NavBar";
import s from "styles/Home.module.scss";
import PropertyCard from "components/PropertyCard/PropertyCard";
import { useState, useEffect } from "react";
import axios from "axios";
import PropertyFilter from "components/PropertyFilter/PropertyFilter";
import loadingHOC from "components/HOC/loading/loading";
import PropertyList from "components/PropertyList/PropertyList";
import OrderBy from "components/OrderBy/OrderBy";

const PropertyListWithLoader = loadingHOC(PropertyList, "Loading...");

export default function Home() {
  const [properties, setProperties] = useState([]);
  // const [filters, setFilters] = useState({
  //   property_type: "all",
  //   operation_type: "all",
  //   departamento: "all",
  //   real_estate: "all",
  //   currency: "all",
  //   price_start: "",
  //   price_end: "",
  //   order: "",
  //   antiquity: "",
  //   ambiences: [],
  //   bedrooms: [],
  //   bathrooms: [],
  //   garage: [],
  //   total_area_start: "",
  //   total_area_end: "",
  //   cover_area_start: "",
  //   cover_area_end: "",
  //   date: "",
  // });
  const [realEstates, setRealEstates] = useState(null);
  const [url, setUrl] = useState('/properties')
  const [loading, setLoading] = useState(false);

  // console.log('FILTERS.ANTIQUITY', filters.antiquity)

  useEffect(() => {
    setLoading(true);
    axios
      .get("/properties")
      .then((res) => {
        setProperties(res.data.properties);
        setRealEstates(res.data.realEstates);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);

  return (
    <div className={s.container}>
      <Head>
        <title>Paseo360</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={s.main}>
        <NavBar route="home" />
        <OrderBy
          setProperties={setProperties}
          url={url}
        />
        <div className={s.grid_container}>
          <div>
            <PropertyFilter
              setProperties={setProperties}
              setLoading={setLoading}
              realEstates={realEstates}
              setUrl={setUrl}
            />
          </div>
          <div>
            {/* {properties.length > 0 &&
              !loading &&
              properties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            <PropertyListWithLoader loading={loading} properties={properties} /> */}
            <PropertyListWithLoader loading={loading} properties={properties} />
          </div>
        </div>
      </main>
    </div>
  );
}
