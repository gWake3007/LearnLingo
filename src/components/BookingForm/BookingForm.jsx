import AuthFormInput from '../AuthFormInput/AuthFormInput.jsx';
import { Field, Form, Formik } from 'formik';
import { validationSchema } from '../../utils/userValidationSchema.js';
import css from './BookingForm.module.css';

const BookingForm = () => {
  const options = [
    'Career and business',
    'Lesson for kids',
    'Living abroad',
    'Exams and coursework',
    'Culture, travel or hobby',
  ];

  const handleSubmit = async (values, actions) => {
    const { name, email, number } = values;
  };
  return (
    <div className={css.container}>
      <h2 className={css.title}>TitleExample</h2>
      <p className={css.description}>DescriptionExample</p>
      <div className={css.containerInfo}>
        <img src=".example" alt="" />
        <div className={css.container.Teacher}>
          <p className={css.text}>Your Teacher</p>
          <h4 className={css.name}>NameExample</h4>
        </div>
      </div>
      <h3 className={css.subTitle}>
        What is your main reason for learning English?
      </h3>
      <div className={css.containerRadio}>
        {options.map((option, index) => (
          <label key={index}>
            <Field type="radio" name="selectedOption" value={option} />
            {option}
          </label>
        ))}
      </div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          number: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <AuthFormInput
              errors={errors}
              touched={touched}
              type={'name'}
              placeholder={'Full Name'}
            />
            <AuthFormInput
              errors={errors}
              touched={touched}
              type={'email'}
              placeholder={'Email'}
            />
            <AuthFormInput
              errors={errors}
              touched={touched}
              type={'number'}
              placeholder={'Phone number'}
            />
            <button type="submit" className={css.btn}>
              Book
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
