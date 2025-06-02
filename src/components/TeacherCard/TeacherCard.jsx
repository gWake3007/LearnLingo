import css from './TeacherCard.module.css';
import { selectTeachers } from '../../redux/teachers/selectors.js';
import { useSelector } from 'react-redux';

const TeacherCard = () => {
  const teachers = useSelector(selectTeachers);
  const teacher = teachers[0];

  if (!teacher) return null;

  return (
    <div className={css.container}>
      <div className={css.imageContainer}>
        <img
          className={css.image}
          src={teacher.avatar_url}
          alt="TeacherImage"
        />
      </div>
      <div className={css.teacherInfoContainer}>
        <div className={css.titleContainer}>
          <div className={css.nameContainer}>
            <p>Languages</p>
            <h2>{teacher.name}</h2>
          </div>
          <div className={css.infoContainer}>
            <ul className={css.list}>
              <li>
                <svg className={css.svgImage}>
                  <use href="../../../public/header/book-open.svg#book"></use>
                </svg>
                Lessons online
              </li>
              <li>
                Lessons done: <span>1098</span>
              </li>
              <li>
                <img
                  src="../../../public/header/star_1x.png"
                  srcSet=""
                  alt="star"
                />
                Rating: <span>4.8</span>
              </li>
              <li>
                Price / 1 hour: <span>30$</span>
              </li>
            </ul>
            <button className={css.heartBtn} type="button">
              Heart
            </button>
          </div>
        </div>
        <div className={css.aboutTeacherContainer}>
          <ul>
            <li>
              <span>Speaks: </span>
              {teacher.languages.map(()=> {}
            </li>
            <li>
              <span>Lesson Info: </span>
              Lessons are structured to cover grammar, vocabulary, and practical
              usage of the language.
            </li>
            <li>
              <span>Conditions: </span>
              Welcomes both adult learners and teenagers (13 years and
              above).Provides personalized study plans
            </li>
          </ul>
        </div>
        <button type="button" className={css.readMoreBtn}>
          Read more
        </button>
        <ul className={css.lagnLevelList}>
          <li>#A1 Beginner</li>
          <li>#A2 Elementary</li>
          <li>#B1 Intermediate</li>
          <li>#B2 Upper-Intermediate</li>
        </ul>
      </div>
    </div>
  );
};

export default TeacherCard;
