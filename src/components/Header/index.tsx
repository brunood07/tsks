import styles from "./styles.module.scss";
import logoImg from "../../assets/Logo.svg";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src={logoImg} alt="tsks logo" />
        <button>
          New Task
        </button>
      </div>
    </header>
  );
}