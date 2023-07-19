import Section from 'components/Section/Section';
import css from './Home.module.css';
import Container from 'components/Container/Container';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>PhoneBook</title>
      </Helmet>
      <main className={css['home-main']}>
        <Section>
          <Container>
            <div className={css['greeting-wrap']}>
              <p className={css['greeting-text']}>
                Welcome to the PhoneBook App! Easily save and manage your
                contacts in one secure place.
              </p>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default Home;
