import { useTask } from '../../hooks/useTask';

import { Empty } from '../Empty';
import { TaskCard } from '../TaskCard';

import styles from './TaskList.module.css';

export function TaskList() {
  const { tasks } = useTask();

  const finishedTasks = tasks.filter((task) => task.status === 'finished');

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.created}>
          <span className={styles.open}>Tarefas criadas</span>
          <div className={styles.counter}>{tasks.length}</div>
        </div>
        <div className={styles.done}>
          <span className={styles.closed}>Concluídas</span>
          <div
            className={styles.counter}
          >{`${finishedTasks.length} de ${tasks.length}`}</div>
        </div>
      </div>

      <div className={styles.taskArea}>
        {tasks.length === 0 ? (
          <Empty />
        ) : (
          <div className={styles.taskList}>
            {tasks &&
              tasks.map((task) => <TaskCard key={task.id} task={task} />)}
          </div>
        )}
      </div>
    </div>
  );
}
