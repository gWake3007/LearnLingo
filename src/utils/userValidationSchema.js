import * as Yup from 'yup';

const nameValidation = value => {
  const nameRegex = /^[a-zA-Z]+$/;
  const parts = value.split(' ');
  if (parts.length !== 2) {
    return 'Please enter both first and last name';
  }
  if (!nameRegex.test(parts[0]) || !nameRegex.test(parts[1])) {
    return 'Both first and last name should only contain letters';
  }
  if (parts[0].length < 3 || parts[1].length < 3) {
    return 'Both first and last name should be at least 3 characters long';
  }
  if (parts[0].length > 20 || parts[1].length > 20) {
    return 'Both first and last name should be no longer than 20 characters';
  }
  if (
    parts[0][0] !== parts[0][0].toUpperCase() ||
    parts[1][0] !== parts[1][0].toUpperCase()
  ) {
    return 'Both first and last name should start with a capital letter';
  }
  return true;
};

export const registerFormValidationSchema = Yup.object({
  name: Yup.string()
    .test(
      'is-full-name',
      'User name is not valid. Format should be FirstName LastName',
      value => nameValidation(value) === true
    )
    .required('Required'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z]{2})(?=.*\d{2}).{8,}$/,
      'Password must be at least 8 characters long, with at least 2 letters and 2 digits'
    )
    .required('Password is required'),
});

export const loginFormValidationSchema = Yup.object({
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Your password is too short!')
    .max(64, 'Your password is too long!'),
});
