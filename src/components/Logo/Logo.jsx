import css from './Logo.module.css';

const Logo = () => {
  return (
    <div className={css.container}>
      <img
        srcSet={`../../../public/header/logo_1x.png 1x, ../../../public/header/logo_2x.png 2x`}
        src="../../../public/header/logo_1x.png"
        alt="Ukraine-logo"
      />
      <p className={css.text}></p>
    </div>
  );
};

export default Logo;
