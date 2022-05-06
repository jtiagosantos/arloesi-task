import { AddNewTaskForm } from '@/components/AddNewTaskForm/AddNewTaskForm';
import { fireEvent, render } from '@testing-library/react';

const submitTaskSpy = jest.fn();
const onCloseModalSpy = jest.fn();
const setTaskNameSpy = jest.fn();
const setTaskDescriptionSpy = jest.fn();

const addNewTaskFormProps = {
  setTaskName: setTaskNameSpy,
  setTaskDescription: setTaskDescriptionSpy,
  submitTask: submitTaskSpy,
  onCloseModal: onCloseModalSpy,
};

describe('AddNewTaskForm component tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('submitTask function is called when to click on save button', () => {
    const { getByRole } = render(
      <AddNewTaskForm
        taskName="mocked-task-name"
        taskDescription="mocked-task-description"
        {...addNewTaskFormProps}
      />,
    );

    const saveButton = getByRole('button', { name: /save/i });

    fireEvent.click(saveButton);

    expect(submitTaskSpy).toBeCalled();
  });

  it('submitTask function is not called when task name is empty', () => {
    const { getByRole } = render(
      <AddNewTaskForm
        taskName=""
        taskDescription="mocked-task-description"
        {...addNewTaskFormProps}
      />,
    );

    const saveButton = getByRole('button', { name: /save/i });

    fireEvent.click(saveButton);

    expect(submitTaskSpy).not.toBeCalled();
  });

  it('submitTask function is not called when task description is empty', () => {
    const { getByRole } = render(
      <AddNewTaskForm
        taskName="mocked-task-name"
        taskDescription=""
        {...addNewTaskFormProps}
      />,
    );

    const saveButton = getByRole('button', { name: /save/i });

    fireEvent.click(saveButton);

    expect(submitTaskSpy).not.toBeCalled();
  });

  it('onCloseModal funcion is called when click on close button', () => {
    const { getByRole } = render(
      <AddNewTaskForm
        taskName=""
        taskDescription=""
        {...addNewTaskFormProps}
      />,
    );

    const closeButton = getByRole('button', { name: /close icon/i });

    fireEvent.click(closeButton);

    expect(onCloseModalSpy).toBeCalled();
  });

  it('setTaskName function is called when to write in task name field', () => {
    const { getByRole } = render(
      <AddNewTaskForm
        taskName=""
        taskDescription=""
        {...addNewTaskFormProps}
      />,
    );

    const taskNameInput = getByRole('textbox', { name: /task name/i });

    fireEvent.change(taskNameInput, {
      target: {
        value: 'mocked-task-name',
      },
    });

    expect(setTaskNameSpy).toBeCalled();
  });

  it('setTaskDescription function is called when to write in task description field', () => {
    const { getByRole } = render(
      <AddNewTaskForm
        taskName=""
        taskDescription=""
        {...addNewTaskFormProps}
      />,
    );

    const taskDescriptionInput = getByRole('textbox', {
      name: /task description/i,
    });

    fireEvent.change(taskDescriptionInput, {
      target: {
        value: 'mocked-task-name',
      },
    });

    expect(setTaskDescriptionSpy).toBeCalled();
  });
});
