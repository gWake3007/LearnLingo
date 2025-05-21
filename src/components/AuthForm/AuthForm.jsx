import { Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/modal/modalAuth/slice.js';
import { selectAuthModalType } from '../../redux/modal/modalAuth/selectors.js';
import css from './AuthForm.module.css';

import { registerUser, loginUser } from '../../redux/auth/operations.js';
import {
  registerFormValidationSchema,
  loginFormValidationSchema,
} from '../../utils/userValidationSchema.js';
import AuthFormInput from '../AuthFormInput/AuthFormInput.jsx';

const AuthForm = () => {
  const dispatch = useDispatch();
  const modalType = useSelector(selectAuthModalType);

  const handleSubmit = async (values, actions) => {
    const { name, email, password } = values;

    try {
      if (modalType === 'Login') {
        await dispatch(loginUser({ email, password }))
          .unwrap()
          .then(() => {
            toast.success('Authentication successful!');
            dispatch(closeModal());
          })
          .catch(error => {
            toast.error(`Authentication failed, please try again!`);
          });
      } else if (modalType === 'Register') {
        await dispatch(registerUser({ name, email, password }))
          .unwrap()
          .then(() => {
            toast.success('Registration successful!');
            dispatch(closeModal());
          })
          .catch(error => {
            toast.error(`Registration failed, please try again!`);
          });
      }

      actions.resetForm();
    } catch (error) {
      error.message;
    }
  };

  const chooseValidationSchema = () => {
    if (modalType === 'Login') return loginFormValidationSchema;
    else if (modalType === 'Register') return registerFormValidationSchema;
  };

  const getAuthFormTitle = () => {
    return modalType === 'Login' ? 'Log In' : 'Registration';
  };

  const getAuthFormDescription = () => {
    return modalType === 'Login'
      ? 'Welcome back! Please enter your credentials to access your account and continue your search for an teacher.'
      : 'Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information';
  };

  const getAuthFormButton = () => {
    return modalType === 'Login' ? 'Log In' : 'Sign Up';
  };
  return (
    <div className={css.container}>
      <h2 className={css.formTitle}>{getAuthFormTitle()}</h2>
      <p className={css.formDescription}>{getAuthFormDescription()}</p>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={chooseValidationSchema}
      >
        {({ errors, touched }) => (
          <Form>
            {modalType === 'Register' && (
              <AuthFormInput
                errors={errors}
                touched={touched}
                type={'name'}
                placeholder={'Name'}
              />
            )}
            <AuthFormInput
              errors={errors}
              touched={touched}
              type={'email'}
              placeholder={'Email'}
            />
            <AuthFormInput
              errors={errors}
              touched={touched}
              type={'password'}
              placeholder={'Password'}
            />
            <button type="submit" className={css.btn}>
              {getAuthFormButton()}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AuthForm;
