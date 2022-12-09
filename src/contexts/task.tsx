import { createContext, FC, ReactNode, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

export interface Task {
  id: string;
  task: string;
  status: string;
}

interface TaskParams {
  tasks: Task[];
  getTasks: () => void;
  addTask: (task: string) => void;
  removeTask: (taskId: string) => void;
  markTaskDone: (taskId: string) => void;
}

export const TaskContext = createContext({} as TaskParams);

const TaskProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  function getTasks() {
    const storedTasks = localStorage.getItem('tasks');
    const parsedTasks = storedTasks ? JSON.parse(storedTasks) : [];

    setTasks(parsedTasks);
  }

  function addTask(task: string) {
    const storedTasks = localStorage.getItem('tasks');
    const parsedTasks = storedTasks ? JSON.parse(storedTasks) : [];

    const id = uuidv4();

    const newTask = {
      id: id,
      task,
      status: 'open',
    };

    setTasks([...parsedTasks, newTask]);
    localStorage.setItem('tasks', JSON.stringify([...parsedTasks, newTask]));
  }

  function removeTask(taskId: string) {
    const storedTasks = localStorage.getItem('tasks');
    const parsedTasks = storedTasks ? JSON.parse(storedTasks) : [];

    const filteredTasks = parsedTasks.filter(
      (task: Task) => task.id !== taskId,
    );

    setTasks([...filteredTasks]);
    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
  }

  function markTaskDone(taskId: string) {
    const storedTasks = localStorage.getItem('tasks');
    const parsedTasks: Task[] = storedTasks ? JSON.parse(storedTasks) : [];

    const taskToChange = parsedTasks.filter((task: Task) => task.id === taskId);
    const taskIndex = parsedTasks.indexOf(taskToChange[0]);

    if (taskIndex !== -1) {
      if (parsedTasks[taskIndex].status === 'open') {
        parsedTasks[taskIndex].status = 'finished';
      } else {
        parsedTasks[taskIndex].status = 'open';
      }
      setTasks(parsedTasks);
      localStorage.setItem('tasks', JSON.stringify(parsedTasks));
    }
  }

  return (
    <TaskContext.Provider
      value={{ tasks, getTasks, addTask, markTaskDone, removeTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskProvider };
