import AuthForm from '../AuthForm/AuthForm.jsx';
import { selectAuthModalIsOpen } from '../../redux/modal/modalAuth/selectors.js';
import { closeModal } from '../../redux/modal/modalAuth/slice.js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ModalAuth.module.css';

const ModalAuth = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector(selectAuthModalIsOpen);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = e => {
      if (e.key === 'Escape') dispatch(closeModal());
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, dispatch]);

  if (!isOpen) return null;

  const handleOverlayClick = () => {
    dispatch(closeModal());
  };

  const handleContentClick = e => {
    e.stopPropagation();
  };

  return (
    <div className={css.overlay} onClick={handleOverlayClick}>
      <div className={css.modal} onClick={handleContentClick}>
        <button
          className={css.closeBtn}
          type="button"
          onClick={() => dispatch(closeModal())}
        >
          close modal
        </button>
        <AuthForm />
      </div>
    </div>
  );
};

export default ModalAuth;
