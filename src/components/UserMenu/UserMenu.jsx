import { useDispatch } from 'react-redux';
import css from './UserMenu.module.css';
import { logOut } from 'redux/Auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <div className={css['user-menu-wrapper']}>
      <p className={css['user-name']}>Welcome...</p>
      <button
        className={css['logout-btn']}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
