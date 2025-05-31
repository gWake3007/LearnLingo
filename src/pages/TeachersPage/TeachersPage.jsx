import css from './TeachersPage.module.css';
import BtnLoadMore from '../../components/BtnLoadMore/BtnLoadMore.jsx';
import SelectOptions from '../../components/SelectOptions/SelectOptions.jsx';
import TeacherCard from '../../components/TeacherCard/TeacherCard.jsx';

const TeachersPage = () => {
  return (
    <div className={css.page}>
      TeachersPage
      <SelectOptions />
      <TeacherCard />
      <BtnLoadMore />
    </div>
  );
};

export default TeachersPage;
