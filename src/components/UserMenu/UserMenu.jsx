import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { logOut } from 'redux/Auth/operations';
import { selectUser } from 'redux/Auth/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={css['user-menu-wrapper']}>
      <p className={css['user-name']}>Welcome, {user.name}</p>
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
