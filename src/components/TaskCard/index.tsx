import { CheckCircle, Circle, Trash } from 'phosphor-react';

import { Task } from '../../contexts/task';
import { useTask } from '../../hooks/useTask';

import styles from './TaskCard.module.css';

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  const { markTaskDone, removeTask } = useTask();

  function handleRemoveTask() {
    removeTask(task.id);
  }

  function handleMarkTaskDone() {
    markTaskDone(task.id);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.check}>
        {task.status === 'open' ? (
          <Circle
            size={24}
            className={styles.unchecked}
            onClick={handleMarkTaskDone}
          />
        ) : (
          <CheckCircle
            weight="fill"
            size={24}
            className={styles.check}
            onClick={handleMarkTaskDone}
          />
        )}
      </div>
      <div className={styles.task}>
        <p
          // className={styles.openTask}
          className={
            task.status === 'open' ? styles.openTask : styles.closedTask
          }
        >
          {task.task}
        </p>
      </div>
      <div className={styles.delete}>
        <Trash size={24} onClick={handleRemoveTask} />
      </div>
    </div>
  );
}
