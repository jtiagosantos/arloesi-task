import { AddTaskButton } from '@/components/AddTaskButton/AddTaskButton';
import { Header } from '@/components/Header/Header';
import { InputSearch } from '@/components/InputSearch/InputSearch';
import { Container } from '@/pages/Home/styles';

export const Home = () => {
  return (
    <Container>
      <Header />

      <section>
        <InputSearch />
        <AddTaskButton />
      </section>
    </Container>
  );
};
