import css from './HomePage.module.css';
import GetStarted from '../../components/GetStarted/GetStarted.jsx';
import HomeScreenSaver from '../../components/GetStarted/HomeScreenSaver/HomeScreenSaver.jsx';
import HomeDescription from '../../components/HomeDescription/HomeDescription.jsx';

const HomePage = () => {
  return (
    <div className={css.homePage}>
      <GetStarted />
      <HomeScreenSaver />
      <HomeDescription />
    </div>
  );
};

export default HomePage;
