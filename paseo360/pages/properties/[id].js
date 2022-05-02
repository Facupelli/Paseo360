
export default function PropertyDetail({ property }) {
    console.log('PROPERTY', property)
  return (
    <div>
      <p>CARD</p>
      <p>{property.name}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  const response = await fetch(`http://localhost:3001/properties/${id}`)
  const property = await response.json()
  return {
    props: { property: property }, // will be passed to the page component as props
  };
}

// export async function getStaticPaths() {
//   // Return a list of possible value for id
//   const properties = ['1','2','3','4','5','566','7','7','8','899'];

//   console.log('PROPERTIES', properties)

//   const paths = properties.map((property) => ({
//     params: { id: property },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   // Fetch necessary data for the blog post using params.id
//   const {id} = params
//   const property = await axios.get(`properties/${id}`);
//   return {
//     props: {
//       property,
//     },
//   };
// }
