import styles from "./styles.module.scss";
import logoImg from "../../assets/Logo.svg";
import { useTodoModal } from "../../hooks/useTodoModal";

export function Header() {
  const { handleOpenModal } = useTodoModal();
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src={logoImg} alt="tsks logo" />
        <button
          type="button"
          onClick={() => handleOpenModal("newTodo")}
        >
          New Task
        </button>
      </div>
    </header>
  );
}