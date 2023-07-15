import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
  return (
    <form className={css['registration-form']} autoComplete="off">
      <label className={css['registration-form-label']}>
        Username
        <input
          className={css['registration-form-input']}
          type="text"
          name="name"
        />
      </label>
      <label className={css['registration-form-label']}>
        Email
        <input
          className={css['registration-form-input']}
          type="email"
          name="email"
        />
      </label>
      <label className={css['registration-form-label']}>
        Password
        <input
          className={css['registration-form-input']}
          type="password"
          name="password"
        />
      </label>
      <button className={css['registration-form-btn']} type="submit">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
