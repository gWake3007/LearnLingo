import css from './TeacherCard.module.css';
import { useState } from 'react';
import { selectTeachers } from '../../redux/teachers/selectors.js';
import { useSelector } from 'react-redux';

const TeacherCard = () => {
  const teachers = useSelector(selectTeachers);
  const teacher = teachers[0];

  const [isExpanded, setIsExpanded] = useState(false);

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
            <h2>
              {teacher.name} {teacher.surname}
            </h2>
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
                Lessons done: <span>{teacher.lessons_done}</span>
              </li>
              <li>
                <img
                  src="../../../public/header/star_1x.png"
                  srcSet=""
                  alt="star"
                />
                Rating: <span>{teacher.rating}</span>
              </li>
              <li>
                Price / 1 hour: <span>{teacher.price_per_hour}$</span>
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
              {teacher.languages.join(', ')}
            </li>
            <li>
              <span>Lesson Info: </span>
              {teacher.lesson_info}
            </li>
            <li>
              <span>Conditions: </span>
              {teacher.conditions.join(' ')}
            </li>
          </ul>
        </div>
        {!isExpanded && (
          <button
            type="button"
            className={css.readMoreBtn}
            onClick={() => setIsExpanded(true)}
          >
            Read more
          </button>
        )}
        {isExpanded && <p className={css.experience}>{teacher.experience}</p>}
        {isExpanded && teacher.reviews?.length > 0 && (
          <ul className={css.commentList}>
            {teacher.reviews.map(
              ({ comment, reviewer_name, reviewer_rating }, idx) => (
                <li key={idx} className={css.commentItem}>
                  <div>
                    <div className={css.commentImg}></div>
                    <h4>{reviewer_name}</h4>
                    <div>
                      <img
                        src="../../../public/header/star_1x.png"
                        srcSet="../../../public/header/star_1x.png 1x, ../../../public/header/star_2x.png 2x"
                        alt={reviewer_name}
                      />
                      <span>{reviewer_rating}</span>
                    </div>
                  </div>
                  <p className={css.comment}>{comment}</p>
                </li>
              )
            )}
          </ul>
        )}
        <ul className={css.lagnLevelList}>
          {teacher.levels.map(level => (
            <li>{level}</li>
          ))}
        </ul>
        {isExpanded && (
          <button className={css.bookBtn} type="button">
            Book trial lesson
          </button>
        )}
      </div>
    </div>
  );
};

export default TeacherCard;
