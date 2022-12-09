import { ChangeEvent, useState } from 'react';

import { PlusCircle } from 'phosphor-react';

import { useTask } from '../../hooks/useTask';

import styles from './AddTask.module.css';

export function AddTask() {
  const [task, setTask] = useState('');

  const { addTask } = useTask();

  function onAddTask(event: ChangeEvent<HTMLInputElement>) {
    const task = event.target.value;
    setTask(task);
  }

  function handleAddTask() {
    if (task === '') return;

    addTask(task);
    setTask('');
  }

  const isDisabledBtn = task.length === 0 ? true : false;

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        className={styles.inputTask}
        placeholder="Adicione uma nova tarefa"
        value={task}
        onChange={onAddTask}
      />
      <button
        className={styles.addTaskBtn}
        disabled={isDisabledBtn}
        onClick={handleAddTask}
      >
        Criar <PlusCircle size={22} />
      </button>
    </div>
  );
}
