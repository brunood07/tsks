import rectangleImg from "../../assets/Rectangle.svg";
import { useTodo } from "../../hooks/useTodo";

import styles from "./styles.module.scss";

export function TodoTable() {
  const { todos, deleteTodo } = useTodo();

  function handleDeleteTodo(id: number) {
    deleteTodo(id);
  }

  return (
    <>
      {todos.length > 0 ? todos.map(todo => (
        <div className={styles.todoContainer} key={todo.id}>
          <div className={styles.headerContent}>
            <img src={rectangleImg} alt="Circle" />
            <p>{todo.title}</p>
            <div className={styles.dropdown}>
              <button className={styles.dropdownButton}>...</button>
              <div className={styles.dropdownContent}>
                <button>Complete</button>   
                <button>Update</button>
                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </div>
            </div>
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