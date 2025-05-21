import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors.js';

const PrivateRoute = ({ children, restricted = false }) => {
  const isAuth = useSelector(selectUser);
  const location = useLocation();

  if (isAuth && restricted) {
    return <Navigate to="/favorites" state={{ state: location }} />;
  }

  return children;
  // return isAuth ? children : <Navigate to="/teachers" />;
};

export default PrivateRoute;
