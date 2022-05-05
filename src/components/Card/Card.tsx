import trashIcon from '@/assets/icons/trash-icon.svg';
import { Container } from '@/components/Card/styles';
import { FC } from 'react';

interface CardProps {
  taskName: string;
  taskDescription: string;
}

export const Card: FC<CardProps> = ({ taskName, taskDescription }) => {
  return (
    <Container>
      <div>
        <h1>{taskName}</h1>
        <p>{taskDescription}</p>
      </div>
      <button>
        <img src={trashIcon} alt="Trash icon" />
      </button>
    </Container>
  );
};
