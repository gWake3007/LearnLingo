import css from './HomeDescription.module.css';

const HomeDescription = () => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li className={css.item}>
          <strong>32,000+</strong>
          <p>Experienced tutors</p>
        </li>
        <li className={css.item}>
          <strong>300,000+</strong>
          <p>5-star tutor reviews</p>
        </li>
        <li className={css.item}>
          <strong>120+</strong>
          <p>Subjects taught</p>
        </li>
        <li className={css.item}>
          <strong>200+</strong>
          <p>Tutor nationalities</p>
        </li>
      </ul>
    </div>
  );
};

export default HomeDescription;
