import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/Auth/operations';
import { selectUser } from 'redux/Auth/selectors';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const isMobile = window.innerWidth < 480;

  return (
    <div className={css['user-menu-wrapper']}>
      {!isMobile && <p className={css['user-name']}>Welcome, {user.name}</p>}
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
