import { AddNewTaskForm } from '@/components/AddNewTaskForm/AddNewTaskForm';
import { AddTaskButton } from '@/components/AddTaskButton/AddTaskButton';
import { Card } from '@/components/Card/Card';
import { CardList } from '@/components/CardList/CardList';
import { Header } from '@/components/Header/Header';
import { InputSearch } from '@/components/InputSearch/InputSearch';
import { Modal, ModalHandler } from '@/components/Modal/Modal';
import { useCustomToast } from '@/hooks/useCustomToast';
import { Container } from '@/pages/Home/styles';
import { useRef, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Task {
  id: string;
  name: string;
  description: string;
}

export const Home = () => {
  const [isAddNewTaskModal, setIsAddNewTaskModal] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const modalRef = useRef<ModalHandler>(null);

  const { successToast } = useCustomToast();

  const handleOpenAddNewTaskModal = () => {
    setIsAddNewTaskModal(true);
    modalRef.current?.open();
  };

  const handleCloseAddNewTaskModal = () => {
    setIsAddNewTaskModal(false);
    modalRef.current?.close();
  };

  const submitTask = (id: string, name: string, description: string) => {
    const newTask = { id, name, description };

    setTasks((tasks) => [newTask, ...tasks]);

    successToast('Task added successfully.');
  };

  return (
    <>
      <ToastContainer />
      <Container>
        <Header />

        <section>
          <InputSearch />
          <AddTaskButton onClick={handleOpenAddNewTaskModal} />
        </section>

        <CardList>
          {tasks.map((task) => (
            <Card
              key={task.id}
              taskName={task.name}
              taskDescription={task.description}
            />
          ))}
        </CardList>

        <Modal ref={modalRef}>
          {isAddNewTaskModal ? (
            <AddNewTaskForm
              taskName={taskName}
              setTaskName={setTaskName}
              taskDescription={taskDescription}
              setTaskDescription={setTaskDescription}
              submitTask={submitTask}
              onCloseModal={handleCloseAddNewTaskModal}
            />
          ) : (
            <h1>Delete task</h1>
          )}
        </Modal>
      </Container>
    </>
  );
};
