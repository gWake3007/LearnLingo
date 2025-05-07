import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUser } from '../../redux/auth/selectors.js';

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(selectUser);

  return isAuth ? <Navigate to="/" /> : children;
};

export default PublicRoute;
