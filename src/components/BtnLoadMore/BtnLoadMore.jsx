import css from './BtnLoadMore.module.css';

const BtnLoadMore = () => {
  return (
    <div className={css.container}>
      <button type="button" className={css.btn}>
        Load more
      </button>
    </div>
  );
};

export default BtnLoadMore;
