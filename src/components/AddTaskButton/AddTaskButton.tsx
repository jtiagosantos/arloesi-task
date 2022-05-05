import plusIcon from '@/assets/icons/plus-icon.svg';
import { Container } from '@/components/AddTaskButton/styles';
import { FC } from 'react';

interface AddTaskButtonProps {
  onClick: () => void;
}

export const AddTaskButton: FC<AddTaskButtonProps> = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <img src={plusIcon} alt="Plus icon" />
    </Container>
  );
};
