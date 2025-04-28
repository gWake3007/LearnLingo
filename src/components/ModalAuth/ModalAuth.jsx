import AuthForm from '../AuthForm/AuthForm.jsx';
import css from './ModalAuth.module.css';

const ModalAuth = () => {
  return (
    <div className={css.modal}>
      <button className={css.closeBtn} type="button">
        close modal
      </button>
      <AuthForm />
    </div>
  );
};

export default ModalAuth;
