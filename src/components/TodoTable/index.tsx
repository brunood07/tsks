import { useTodo } from "../../hooks/useTodo";
import styles from "./styles.module.scss";

export function TodoTable() {
  const { todos } = useTodo();

  return (
    <>
      {todos.length > 0 ? todos.map(todo => (
        <div className={styles.todoContainer} key={todo.id}>
          <div className={styles.headerContent}>
            <div></div>
            <p>{todo.title}</p>
            <a>...</a>
          </div>
          <div className={styles.bodyContent}>
            <p>
              {todo.description} 
            </p>
          </div>
          <div className={styles.footerContent}>
            <p>Created {new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeStyle: 'short' }).format(new Date(todo.created_at))}</p>
          </div>
        </div>
      )) : 
      (
        <div className={styles.noTasksContainer}>
          <span className={styles.noTasks}>
            No Tasks
          </span>
        </div>
      )}
    </>
  );
}