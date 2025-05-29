import css from './HomeScreenSaver.module.css';

const HomeScreenSaver = () => {
  return (
    <div className={css.container}>
      <div className={css.imageWrapper}>
        <img
          className={css.picture}
          src="../../../../public/header/Girl_face_1x.png"
          alt="Girl"
          srcSet="../../../../public/header/Girl_face_1x.png 1x, ../../../../public/header/Girl_face_2x.png 2x"
        />
      </div>
      <div className={css.laptop}>
        <svg className={css.macIcon}>
          <use href="../../../../public/header/Mac.svg"></use>
        </svg>
      </div>
    </div>
  );
};

export default HomeScreenSaver;
