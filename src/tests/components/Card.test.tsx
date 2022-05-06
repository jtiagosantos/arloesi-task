/* eslint-disable no-useless-escape */
import { Card } from '@/components/Card/Card';
import { fireEvent, render } from '@testing-library/react';

describe('Card component tests', () => {
  it('should be able to show correct task name', () => {
    const { getByRole } = render(
      <Card
        taskName="mocked-task-name"
        taskDescription=""
        onOpenModal={() => {}}
      />,
    );

    const taskName = getByRole('heading', { name: /mocked\-task\-name/i });

    expect(taskName).toBeInTheDocument();
  });

  it('should be able to show correct task description', () => {
    const { getByText } = render(
      <Card
        taskName=""
        taskDescription="mocked-task-description"
        onOpenModal={() => {}}
      />,
    );

    const taskDescription = getByText(/mocked\-task\-description/i)

    expect(taskDescription).toBeInTheDocument();
  });

  it('should be able to call onOpenModal function when click on button', () => {
    const onOpenModalSpy = jest.fn();
    const { getByRole } = render(
      <Card
        taskName=""
        taskDescription=""
        onOpenModal={onOpenModalSpy}
      />,
    );

    const trashButton = getByRole('button', { name: /trash icon/i });

    fireEvent.click(trashButton);

    expect(onOpenModalSpy).toBeCalled();
  })
});
