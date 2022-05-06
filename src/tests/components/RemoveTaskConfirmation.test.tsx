import { RemoveTaskConfirmation } from '@/components/RemoveTaskConfirmation/RemoveTaskConfirmation';
import { fireEvent, render } from '@testing-library/react';

const onCloseModalSpy = jest.fn();
const noRemoveTasKSpy = jest.fn();

const removeTaskConfirmationProps = {
  onCloseModal: onCloseModalSpy,
  onRemoveTask: noRemoveTasKSpy,
}

describe('RemoveTaskConfirmation component tests', () => {
  it('handleRemoveTask function is executed correctly', () => {
    const { getByText } = render(
      <RemoveTaskConfirmation {...removeTaskConfirmationProps} />
    );

    const deleteButton = getByText('delete');

    fireEvent.click(deleteButton);

    expect(onCloseModalSpy).toBeCalled();
    expect(noRemoveTasKSpy).toBeCalled();
  });
});
