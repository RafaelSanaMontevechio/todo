import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { TaskList } from './components/TaskList';

import { useTask } from './hooks/useTask';

import styles from './App.module.css';
import { useEffect } from 'react';

export function App() {
  const { getTasks } = useTask();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <AddTask />
        <TaskList />
      </div>
    </>
  );
}
