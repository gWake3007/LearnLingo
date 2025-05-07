import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={css.layout}>
      <Header />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
