import { FiLogIn } from 'react-icons/fi';
import { TbLogin } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors.js';
import css from './UserAuth.module.css';

const UserAuth = () => {
  const user = useSelector(selectUser);

  return (
    <div className={css.container}>
      <button className={css.authBtn} type="button">
        {user ? (
          <>
            <TbLogin className={css.icon} size={20} />
            log out
          </>
        ) : (
          <>
            <FiLogIn className={css.icon} size={20} />
            log In
          </>
        )}
      </button>
      {user ? (
        <div className={css.userContainer}>
          <div className={css.userIcon}>{user.name || 'User'}</div>
        </div>
      ) : (
        <button className={css.registrationBtn} type="button">
          Registration
        </button>
      )}
    </div>
  );
};

export default UserAuth;
