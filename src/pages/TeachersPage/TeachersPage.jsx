import css from './TeachersPage.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTeachers } from '../../redux/teachers/operators.js';
import BtnLoadMore from '../../components/BtnLoadMore/BtnLoadMore.jsx';
import SelectOptions from '../../components/SelectOptions/SelectOptions.jsx';
import TeacherCard from '../../components/TeacherCard/TeacherCard.jsx';

const TeachersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);
  return (
    <div className={css.page}>
      <SelectOptions />
      <TeacherCard />
      <BtnLoadMore />
    </div>
  );
};

export default TeachersPage;
