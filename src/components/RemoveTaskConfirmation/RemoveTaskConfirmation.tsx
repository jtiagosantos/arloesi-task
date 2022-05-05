import closeIcon from '@/assets/icons/close-icon.svg';
import { Button } from '@/components/Button/Button';
import { Container } from '@/components/RemoveTaskConfirmation/styles';
import { FC } from 'react';

interface RemoveTaskConfirmationProps {
  onCloseModal: () => void;
  onRemoveTask: () => void;
}

export const RemoveTaskConfirmation: FC<RemoveTaskConfirmationProps> = ({
  onCloseModal,
  onRemoveTask,
}) => {
  const handleRemoveTask = () => {
    onRemoveTask();
    onCloseModal();
  };

  return (
    <Container>
      <h1>Remove task</h1>
      <button onClick={onCloseModal}>
        <img src={closeIcon} alt="Close icon" />
      </button>

      <p>Are you sure you want to delete this task?</p>

      <div>
        <Button
          onClick={onCloseModal}
          backgroundColor="transparent"
          textColor="var(--black-0)"
          padding="0 1.2rem">
          cancel
        </Button>
        <Button
          onClick={handleRemoveTask}
          backgroundColor="var(--brand-primary-0)"
          textColor="var(--white-0)"
          padding="0 1.4rem">
          delete
        </Button>
      </div>
    </Container>
  );
};
