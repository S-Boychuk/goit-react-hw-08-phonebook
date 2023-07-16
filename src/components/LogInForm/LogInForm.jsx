import css from './LogInForm.module.css';

const LogInForm = () => {
  return (
    <div className={css['log-in-form-wrapper']}>
      <form className={css['log-in-form']} autoComplete="off">
        <label className={css['log-in-label']}>
          <span className={css['label-span']}> Email </span>
          <input className={css['log-in-input']} type="email" name="email" />
        </label>
        <label className={css['log-in-label']}>
          <span className={css['label-span']}> Password </span>
          <input
            className={css['log-in-input']}
            type="password"
            name="password"
          />
        </label>
        <button className={css['log-in-btn']} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogInForm;
