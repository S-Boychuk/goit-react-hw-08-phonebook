import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
  return (
    <div className={css['registration-form-wrapper']}>
      <form className={css['registration-form']} autoComplete="off">
        <label className={css['registration-form-label']}>
          <span className={css['label-span']}>Username</span>
          <input
            className={css['registration-form-input']}
            type="text"
            name="name"
          />
        </label>
        <label className={css['registration-form-label']}>
          <span className={css['label-span']}>Email</span>
          <input
            className={css['registration-form-input']}
            type="email"
            name="email"
          />
        </label>
        <label className={css['registration-form-label']}>
          <span className={css['label-span']}>Password</span>
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
    </div>
  );
};

export default RegistrationForm;
