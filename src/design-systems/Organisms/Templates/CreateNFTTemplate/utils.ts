import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is not allowed to be empty"),
  description: Yup.string().required("Description is required"),
  externalLink: Yup.string().required("External link is required"),

  price: Yup.string()
    .required("Price is not allowed to be empty")
    // .max(10, 'Price must be less than or equal to 10')
    // .test(
    //   "Is positive?",
    //   "Price must be a non-negative number",
    //   (value) => value >= 0
    // ),
    .matches(/^\d*\.?\d+$/, 'Price must be a valid positive number')
    .test('is-valid-positive', 'Price must be a valid positive number', value => {
      const num = parseFloat(value)
      return !isNaN(num) && num >= 0
    }),

  file_upload: Yup.mixed().nullable().required("A file is required"),
});
