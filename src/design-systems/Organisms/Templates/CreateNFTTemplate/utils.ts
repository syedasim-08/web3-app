import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is not allowed to be empty'),
    description: Yup.string().required('Description is required'),
    externalLink: Yup.string().required('External link is required'),

    supply: Yup.number()
      .required('Supply is not allowed to be empty')
      .max(10, 'Supply must be less than or equal to 10')
      .test('Is positive?', 'Supply must be a non-negative number', value => value >= 0),
  
      file_upload: Yup.mixed().nullable().required('A file is required'),
})