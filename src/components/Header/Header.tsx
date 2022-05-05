import logoImage from '@/assets/logo.svg';
import { Container } from '@/components/Header/styles';

export const Header = () => {
  return (
    <Container>
      <img src={logoImage} alt="Logo with title Arloesi Task" />
    </Container>
  );
};
