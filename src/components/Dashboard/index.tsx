import { Summary } from "../Summary";

import styles from "./styles.module.scss";

export function Dashboard() {
  return (
    <>
      <div className={styles.container}>
        <strong>Hi there.</strong>
        <Summary />
      </div>
    </>
  );
}