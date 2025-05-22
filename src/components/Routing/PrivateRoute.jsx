import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors.js';

const PrivateRoute = ({ children }) => {
  const user = useSelector(selectUser);
  const isAuth = Boolean(user);

  return isAuth ? children : null;
};

export default PrivateRoute;
