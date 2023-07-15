import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = true;

  const navLinkClassName = ({ isActive }) =>
    isActive ? css['active'] : css['nav-link'];

  return (
    <nav className={css.navigation}>
      <NavLink className={navLinkClassName} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={navLinkClassName} to="/Contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
