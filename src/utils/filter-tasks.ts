import { Task } from '@/pages/Home/Home';

export const filterTasks = (
  search: string,
  tasks: Array<Task>,
): Array<Task> => {
  const filteredTasks = tasks.filter((task) =>
    task.name.toLocaleLowerCase().includes(search.toLowerCase()),
  );

  return filteredTasks;
};
