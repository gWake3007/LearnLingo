import css from './TeacherCard.module.css';

const TeacherCard = () => {
  return (
    <div className={css.container}>
      <div className={css.imageContainer}>
        <img className={css.image} src="" srcSet="" alt="TeacherImage" />
      </div>
      <div className={css.teacherInfoContainer}>
        <div className={css.titleContainer}>
          <div className={css.nameContainer}>
            <p>Languages</p>
            <h2>Name</h2>
          </div>
          <div className={css.infoContainer}>
            <ul className={css.list}>
              <li>Lessons online</li>
              <li>Lessons done: 1098</li>
              <li>Rating: 4.8</li>
              <li>Price / 1 hour: 30$</li>
            </ul>
            <button type="button">Heart</button>
          </div>
        </div>
        <div className={css.aboutTeacherContainer}>
          <ul>
            <li>
              <span>Speaks: </span>
              German, French
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
        <button type="button">Read more</button>
      </div>
    </div>
  );
};

export default TeacherCard;
