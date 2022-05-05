import plusIcon from '@/assets/icons/plus-icon.svg';
import { Container } from '@/components/AddTaskButton/styles';

export const AddTaskButton = () => {
  return (
    <Container>
      <img src={plusIcon} alt="Plus icon" />
    </Container>
  );
};
