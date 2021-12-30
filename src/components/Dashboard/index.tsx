import { Summary } from "../Summary";
import { TodoTable } from "../TodoTable";

import styles from "./styles.module.scss";

export function Dashboard() {
  return (
    <>
      <main className={styles.container}>
        <h1>Hi there.</h1>
        <Summary />
        <TodoTable />
      </main>
    </>
  );
}