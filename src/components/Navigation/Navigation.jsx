import { useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
  const user = useSelector(selectUser);

  const getClassNames = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
  };

  return (
    <nav className={css.nav}>
      <NavLink className={getClassNames} to="/">
        Home
      </NavLink>
      <NavLink className={getClassNames} to="/teachers">
        Teachers
      </NavLink>
      {user && (
        <NavLink className={getClassNames} to="/favorites">
          Favorites
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
