import * as Yup from 'yup';

export const schema = {
  link: Yup.string()
    .required('Enter the tool link =)')
    .url('Please enter a valid url'),
  title: Yup.string().required('Enter the tool title =)'),
};

export const error = (err, ref) => {
  if (err instanceof Yup.ValidationError) {
    const errorMessages = {};

    err.inner.forEach((validate) => {
      errorMessages[validate.path] = validate.message;
    });

    ref.current.setErrors(errorMessages);
  }
};
