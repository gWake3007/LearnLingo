import css from './GetStarted.module.css';

const GetStarted = () => {
  return (
    <div className={css.background}>
      <div className={css.container}>
        <div className={css.titleContainer}>
          <h1 className={css.title}>
            Unlock your potential with the best <span>language</span> tutors
          </h1>
        </div>
        <div className={css.descContainer}>
          <p className={css.description}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
        </div>
        <button className={css.btn} type="button">
          Get started
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
