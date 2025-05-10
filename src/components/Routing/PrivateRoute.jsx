import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors.js';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(selectUser);

  return isAuth ? children : <Navigate to="/teachers" />;
};

export default PrivateRoute;
