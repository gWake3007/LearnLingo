import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={css.wrap}>
      <strong className={css.errNumber}>404</strong>
      <strong className={css.errMessage}>Page not found</strong>
    </div>
  );
};

export default NotFoundPage;
