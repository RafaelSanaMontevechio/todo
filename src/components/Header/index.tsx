import styles from './Header.module.css';

import todoLogo from '../../assets/todo.svg';
import { AddTask } from '../AddTask';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="todo-list" />
    </header>
  );
}
