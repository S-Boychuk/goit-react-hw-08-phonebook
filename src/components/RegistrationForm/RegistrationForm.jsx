import { useDispatch } from 'react-redux';
import css from './RegistrationForm.module.css';
import { register } from 'redux/Auth/operations';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      await dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );

      form.reset();
    } catch (error) {
      console.log('error :>> ', error);
    }
  };

  return (
    <div className={css['registration-form-wrapper']}>
      <form
        className={css['registration-form']}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
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
