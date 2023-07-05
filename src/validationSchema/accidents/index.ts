import * as yup from 'yup';

export const accidentValidationSchema = yup.object().shape({
  description: yup.string().required(),
  date: yup.date().required(),
  company_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
