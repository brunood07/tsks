import styles from "./styles.module.scss";
import logoImg from "../../assets/Logo.svg";

interface HeaderProps {
  onOpenNewTodoModal: () => void;
}

export function Header({onOpenNewTodoModal}: HeaderProps) {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src={logoImg} alt="tsks logo" />
        <button
          type="button"
          onClick={onOpenNewTodoModal}
        >
          New Task
        </button>
      </div>
    </header>
  );
}