import searchIcon from '@/assets/icons/search-icon.svg';
import { Container } from '@/components/InputSearch/styles';
import { FC } from 'react';

interface InputSearchProps {
  search: string;
  setSearch: (search: string) => void;
}

export const InputSearch: FC<InputSearchProps> = ({ search, setSearch }) => {
  return (
    <Container>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />
      <img src={searchIcon} alt="Search icon" />
    </Container>
  );
};
