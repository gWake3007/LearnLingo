import { FiLogIn } from 'react-icons/fi';
import { TbLogin } from 'react-icons/tb';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../redux/modal/modalAuth/slice.js';
import { logoutUser } from '../../redux/auth/operations.js';
import { selectUser } from '../../redux/auth/selectors.js';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import css from './UserAuth.module.css';

const UserAuth = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleOpenModal = modalType => {
    dispatch(openModal({ modalType }));
  };

  const logOut = () => {
    try {
      dispatch(logoutUser());
      navigate('/home');
    } catch (error) {
      toast.error(`Log out Error`);
    }
  };

  return (
    <div className={css.container}>
      {user ? (
        <button className={css.authBtn} type="button" onClick={logOut}>
          <TbLogin className={css.icon} size={20} />
          log out
        </button>
      ) : (
        <button
          className={css.authBtn}
          type="button"
          onClick={() => handleOpenModal('Login')}
        >
          <FiLogIn className={css.icon} size={20} />
          log In
        </button>
      )}
      {user ? (
        <div className={css.userContainer}>
          <div className={css.userIcon}>{user.name || 'User'}</div>
        </div>
      ) : (
        <button
          className={css.registrationBtn}
          type="button"
          onClick={() => handleOpenModal('Register')}
        >
          Registration
        </button>
      )}
    </div>
  );
};

export default UserAuth;
