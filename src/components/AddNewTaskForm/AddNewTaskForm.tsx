import closeIcon from '@/assets/icons/close-icon.svg';
import { Container } from '@/components/AddNewTaskForm/styles';
import { FC, FormEvent, useId } from 'react';

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
  const taskId = useId();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!taskName) {
      alert('Task name is required');
      return;
    }

    if (!taskDescription) {
      alert('Task description is required');
      return;
    }

    submitTask(taskId, taskName, taskDescription);

    setTaskName('');
    setTaskDescription('');

    onCloseModal();
  };

  return (
    <Container>
      <h1>Add new task</h1>
      <button onClick={onCloseModal}>
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

        <button type="submit">save</button>
      </form>
    </Container>
  );
};
