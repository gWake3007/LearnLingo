import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.jsx';
import UserAuth from '../UserAuth/UserAuth.jsx';
import Logo from '../Logo/Logo.jsx';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <Link to="/">
        <Logo />
      </Link>
      <Navigation />
      <UserAuth />
    </header>
  );
};

export default Header;
