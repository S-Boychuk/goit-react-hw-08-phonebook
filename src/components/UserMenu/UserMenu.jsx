import css from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={css['user-menu-wrapper']}>
      <p className={css['user-name']}>Welcome...</p>
      <button className={css['logout-btn']} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
