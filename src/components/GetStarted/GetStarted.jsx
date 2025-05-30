import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modal/modalAuth/slice.js';
import css from './GetStarted.module.css';

const GetStarted = () => {
  const dispatch = useDispatch();

  const handleOpenModal = modalType => {
    dispatch(openModal({ modalType }));
  };
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Unlock your potential with the best <span>language</span> tutors
      </h1>
      <p className={css.description}>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </p>
      <button
        className={css.btn}
        type="button"
        onClick={() => handleOpenModal('Register')}
      >
        Get started
      </button>
    </div>
  );
};

export default GetStarted;
