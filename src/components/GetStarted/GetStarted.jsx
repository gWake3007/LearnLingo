import css from './GetStarted.module.css';

const GetStarted = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Unlock your potential with the best <span>language</span> tutors
      </h1>
      <p className={css.description}>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </p>
      <button className={css.btn} type="button">
        Get started
      </button>
    </div>
  );
};

export default GetStarted;
