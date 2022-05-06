import { Home } from '@/pages/Home/Home';
import { fireEvent, render } from '@testing-library/react';

describe('Home page tests', () => {
  it('should be able to add a new task', () => {
    const { getByRole, getByText } = render(<Home />);

    const plusButton = getByRole('button', { name: /plus icon/i });

    fireEvent.click(plusButton);

    const taskNameField = getByRole('textbox', { name: /task name/i });
    const taskDescriptionField = getByRole('textbox', {
      name: /task description/i
    });
    const saveButton = getByRole('button', { name: /save/i });

    fireEvent.change(taskNameField, {
      target: {
        value: 'new-task-name',
      },
    });
    fireEvent.change(taskDescriptionField, {
      target: {
        value: 'new-task-description',
      },
    });
    fireEvent.click(saveButton);

    expect(getByText('new-task-name')).toBeInTheDocument();
    expect(getByText('new-task-description')).toBeInTheDocument();
  });

  it('should be able to delete delete a task', () => {
    const { getByRole, getByText } = render(<Home />);

    const plusButton = getByRole('button', { name: /plus icon/i });

    fireEvent.click(plusButton);

    const taskNameField = getByRole('textbox', { name: /task name/i });
    const taskDescriptionField = getByRole('textbox', {
      name: /task description/i
    });
    const saveButton = getByRole('button', { name: /save/i });

    fireEvent.change(taskNameField, {
      target: {
        value: 'new-task-name',
      },
    });
    fireEvent.change(taskDescriptionField, {
      target: {
        value: 'new-task-description',
      },
    });
    fireEvent.click(saveButton);

    const taskName = getByText('new-task-name');
    const taskDescription = getByText('new-task-description');
    const trashButton = getByRole('button', { name: /trash icon/i });

    fireEvent.click(trashButton);

    const deleteButton = getByText('delete');

    fireEvent.click(deleteButton);

    expect(taskName).not.toBeInTheDocument();
    expect(taskDescription).not.toBeInTheDocument();
  });

  it('should be able to correct search', () => {
    const { getByRole, getByText, getByPlaceholderText } = render(<Home />);

    fireEvent.click(getByRole('button', { name: /plus icon/i }));
    fireEvent.change(getByRole('textbox', { name: /task name/i }), {
      target: {
        value: 'new-task-name',
      },
    });
    fireEvent.change(getByRole('textbox', {
      name: /task description/i
    }), {
      target: {
        value: 'new-task-description',
      },
    });
    fireEvent.click(getByRole('button', { name: /save/i }));

    fireEvent.click(getByRole('button', { name: /plus icon/i }));
    fireEvent.change(getByRole('textbox', { name: /task name/i }), {
      target: {
        value: 'new-task-name-#2',
      },
    });
    fireEvent.change(getByRole('textbox', {
      name: /task description/i
    }), {
      target: {
        value: 'new-task-description-#2',
      },
    });
    fireEvent.click(getByRole('button', { name: /save/i }));

    const firstTask = getByText('new-task-name');
    const secondTask = getByText('new-task-name-#2');

    fireEvent.change(getByPlaceholderText('Search'), {
      target: {
        value: '-#2',
      },
    });

    expect(firstTask).not.toBeInTheDocument();
    expect(secondTask).toBeInTheDocument();

    fireEvent.change(getByPlaceholderText('Search'), {
      target: {
        value: 'anything',
      },
    });

    expect(getByText(`No results for "anything"`)).toBeInTheDocument();
  });
})