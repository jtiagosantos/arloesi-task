import { AddNewTaskForm } from '@/components/AddNewTaskForm/AddNewTaskForm';
import { AddTaskButton } from '@/components/AddTaskButton/AddTaskButton';
import { Card } from '@/components/Card/Card';
import { CardList } from '@/components/CardList/CardList';
import { Header } from '@/components/Header/Header';
import { InputSearch } from '@/components/InputSearch/InputSearch';
import { Modal, ModalHandler } from '@/components/Modal/Modal';
import { NoTask } from '@/components/NoTask/NoTask';
import { RemoveTaskConfirmation } from '@/components/RemoveTaskConfirmation/RemoveTaskConfirmation';
import { useCustomToast } from '@/hooks/useCustomToast';
import { Container } from '@/pages/Home/styles';
import { filterTasks } from '@/utils/filter-tasks';
import { useEffect, useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface Task {
  id: string;
  name: string;
  description: string;
}

export const Home = () => {
  const [isAddNewTaskModal, setIsAddNewTaskModal] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskId, setTaskId] = useState<string>('');
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const [filteredTasks, setFilteredTasks] = useState<Array<Task>>([]);
  const [search, setSearch] = useState('');
  const modalRef = useRef<ModalHandler>(null);

  const { successToast } = useCustomToast();

  useEffect(() => {
    const filteredTasks = filterTasks(search, tasks);

    setFilteredTasks(search ? filteredTasks : tasks);
  }, [search]);

  const handleOpenAddNewTaskModal = () => {
    setIsAddNewTaskModal(true);
    modalRef.current?.open();
  };

  const handleCloseAddNewTaskModal = () => {
    setIsAddNewTaskModal(false);
    modalRef.current?.close();
  };

  const handleOpenRemoveTaskModal = (taskId: string) => {
    modalRef.current?.open();
    setTaskId(taskId);
  };

  const handleCloseRemoveTaskModal = () => {
    modalRef.current?.close();
  };

  const submitTask = (id: string, name: string, description: string) => {
    const newTask = { id, name, description };
    const tasks = (tasks: Array<Task>) => [newTask, ...tasks];

    setTasks(tasks);
    setFilteredTasks(tasks);
    setSearch('');

    toast.dismiss();
    successToast('Task added successfully.');
  };

  const removeTask = () => {
    const tasksNotRemoveds = tasks.filter((task) => task.id !== taskId);

    setTasks(tasksNotRemoveds);
    setFilteredTasks(tasksNotRemoveds);

    setTaskId('');
    setSearch('');
  };

  return (
    <>
      <ToastContainer />
      <Container>
        <Header />

        <section>
          <InputSearch search={search} setSearch={setSearch} />
          <AddTaskButton onClick={handleOpenAddNewTaskModal} />
        </section>

        {!!filteredTasks.length && (
          <CardList>
            {filteredTasks.map((task) => (
              <Card
                key={task.id}
                taskName={task.name}
                taskDescription={task.description}
                onOpenModal={() => handleOpenRemoveTaskModal(task.id)}
              />
            ))}
          </CardList>
        )}

        {!filteredTasks.length && !search && (
          <NoTask>There is no created task</NoTask>
        )}

        {!filteredTasks.length && search && (
          <NoTask>No results for "{search}"</NoTask>
        )}

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
            <RemoveTaskConfirmation
              onRemoveTask={removeTask}
              onCloseModal={handleCloseRemoveTaskModal}
            />
          )}
        </Modal>
      </Container>
    </>
  );
};
