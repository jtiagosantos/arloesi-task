import trashIcon from '@/assets/icons/trash-icon.svg';
import { Container } from '@/components/Card/styles';
import { FC } from 'react';

interface CardProps {
  taskName: string;
  taskDescription: string;
  onOpenModal: () => void;
}

export const Card: FC<CardProps> = ({
  taskName,
  taskDescription,
  onOpenModal,
}) => {
  return (
    <Container>
      <div>
        <h1>{taskName}</h1>
        <p>{taskDescription}</p>
      </div>
      <button onClick={onOpenModal}>
        <img src={trashIcon} alt="Trash icon" />
      </button>
    </Container>
  );
};
