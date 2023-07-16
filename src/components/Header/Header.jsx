import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import Authorization from 'components/Authorization/Authorization';
import css from './Header.module.css';
import Container from 'components/Container/Container';

const Header = () => {
  const isLoggedIn = false;

  return (
    <header className={css.header}>
      <Container>
        <div className={css['header-wrapper']}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <Authorization />}
        </div>
      </Container>
    </header>
  );
};

export default Header;
