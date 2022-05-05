import searchIcon from '@/assets/icons/search-icon.svg';
import { Container } from '@/components/InputSearch/styles';

export const InputSearch = () => {
  return (
    <Container>
      <input type="text" placeholder="Search" />
      <img src={searchIcon} alt="Search icon" />
    </Container>
  );
};
