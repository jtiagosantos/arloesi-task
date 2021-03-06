import closeIcon from '@/assets/icons/close-icon.svg';
import { Container } from '@/components/AddNewTaskForm/styles';
import { Button } from '@/components/Button/Button';
import { useCustomToast } from '@/hooks/useCustomToast';
import { FC, FormEvent, useId } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AddNewTaskFormProps {
  taskName: string;
  taskDescription: string;
  setTaskName: (name: string) => void;
  setTaskDescription: (description: string) => void;
  submitTask: (
    taskId: string,
    taskName: string,
    taskDescription: string,
  ) => void;
  onCloseModal: () => void;
}

export const AddNewTaskForm: FC<AddNewTaskFormProps> = ({
  onCloseModal,
  taskName,
  taskDescription,
  setTaskName,
  setTaskDescription,
  submitTask,
}) => {
  const { errorToast } = useCustomToast();

  const taskId = useId();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    toast.dismiss();

    if (!taskName) {
      errorToast('Task name is required.');
      return;
    }

    if (!taskDescription) {
      errorToast('Task description is required.');
      return;
    }

    submitTask(taskId, taskName, taskDescription);

    setTaskName('');
    setTaskDescription('');

    onCloseModal();
  };

  const handleCloseModal = () => {
    setTaskName('');
    setTaskDescription('');
    onCloseModal();
  };

  return (
    <>
      <ToastContainer />

      <Container>
        <h1>Add new task</h1>
        <button onClick={handleCloseModal}>
          <img src={closeIcon} alt="Close icon" />
        </button>

        <form onSubmit={handleSubmit}>
          <label htmlFor="task-name">Task name</label>
          <input
            type="text"
            id="task-name"
            value={taskName}
            onChange={({ target }) => setTaskName(target.value)}
          />

          <label htmlFor="task-description">Task description</label>
          <textarea
            id="task-description"
            value={taskDescription}
            onChange={({ target }) => setTaskDescription(target.value)}
          />

          <Button
            type="submit"
            backgroundColor="var(--brand-primary-0)"
            textColor="var(--white-0)">
            save
          </Button>
        </form>
      </Container>
    </>
  );
};
