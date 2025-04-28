import authFormInput from '../AuthFormInput/AuthFormInput.jsx';
import { validationSchema } from '../../utils/userValidationSchema.js';
import css from './BookingForm.module.css';

const BookingForm = () => {
  return (
    <div className={css.container}>
      <h2>TitleExample</h2>
      <p>DescriptionExample</p>
      <div>
        <img src="" alt="" />
        <div>
          <p>Your Teacher</p>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
