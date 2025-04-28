import BookingForm from '../BookingForm/BookingForm.jsx';
import css from './BookingModal.module.css';

const BookingModal = () => {
  return (
    <div className={css.modal}>
      <button className={css.closeBtn} type="button">
        close modal
      </button>
      <BookingForm />
    </div>
  );
};

export default BookingModal;
