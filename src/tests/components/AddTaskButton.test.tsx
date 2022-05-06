import { AddTaskButton } from '@/components/AddTaskButton/AddTaskButton';
import { fireEvent, render } from '@testing-library/react';

describe('AddTaskButton component tests', () => {
  it('should be able to call function when to click on the button', () => {
    const onClickSpy = jest.fn();
    const { getByRole } = render(<AddTaskButton onClick={onClickSpy} />);

    const addButton = getByRole('button', { name: /plus icon/i });

    fireEvent.click(addButton);

    expect(onClickSpy).toBeCalled();
  });
});
