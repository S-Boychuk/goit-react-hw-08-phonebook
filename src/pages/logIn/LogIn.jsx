import Section from 'components/Section/Section';
import LogInForm from 'components/LogInForm/LogInForm';
import Container from 'components/Container/Container';

const LogIn = () => {
  return (
    <main>
      <Section title="Log In form">
        <Container>
          <LogInForm />
        </Container>
      </Section>
    </main>
  );
};

export default LogIn;
