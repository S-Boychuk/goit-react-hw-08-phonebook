import Section from 'components/Section/Section';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import Container from 'components/Container/Container';

const Register = () => {
  return (
    <main>
      <Section title="Registration form">
        <Container>
          <RegistrationForm />
        </Container>
      </Section>
    </main>
  );
};

export default Register;
