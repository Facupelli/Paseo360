import * as yup from "yup";

const postPropertySchema = yup.object().shape({
  name: yup.string().required("Este campo es obligatorio"),
  property_type: yup.string().required("Este campo es obligatorio"),
  price: yup
    .number()
    .typeError("Debe ser un numero")
    .required("Este campo es obligatorio"),
  currency: yup.string().required("Este campo es obligatorio"),
  description: yup.string().required("Este campo es obligatorio"),
  total_area: yup
    .number()
    .typeError("Debe ser un numero")
    .required("Este campo es obligatorio"),
  cover_area: yup
    .number()
    .typeError("Debe ser un numero")
    .required("Este campo es obligatorio"),
  ambiences: yup
    .number()
    .typeError("Debe ser un numero")
    .required("Este campo es obligatorio"),
  year_built: yup
    .number()
    .typeError("Debe ser un numero")
    .required("Este campo es obligatorio"),
  bathrooms: yup
    .number()
    .typeError("Debe ser un numero")
    .required("Este campo es obligatorio"),
  bedrooms: yup
    .number()
    .typeError("Debe ser un numero")
    .required("Este campo es obligatorio"),
  garage: yup
    .number()
    .typeError("Debe ser un numero")
    .required("Este campo es obligatorio"),
});

export default postPropertySchema;
