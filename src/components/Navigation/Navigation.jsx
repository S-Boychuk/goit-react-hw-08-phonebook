import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { selectIsLoggedIn } from 'redux/Auth/selectors';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

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
