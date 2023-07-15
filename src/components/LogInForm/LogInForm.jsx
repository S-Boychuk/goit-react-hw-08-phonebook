import css from './LogInForm.module.css';

const LogInForm = () => {
  return (
    <form className={css['log-in-form']} autoComplete="off">
      <label className={css['log-in-label']}>
        Email
        <input className={css['log-in-input']} type="email" name="email" />
      </label>
      <label className={css['log-in-label']}>
        Password
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
  );
};

export default LogInForm;
