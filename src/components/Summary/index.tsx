import styles from "./styles.module.scss";

export function Summary() {
  return (
    <div className={styles.container}>
      <button 
        className={styles.active}
      >
        To do
      </button>
      <button
        className={styles.notActive}
      >
        Closed
      </button>
    </div>
  );
}