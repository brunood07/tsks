import styles from "./styles.module.scss";

export function TodoTable() {
  return (
    <div className={styles.todoContainer}>
      <div className={styles.headerContent}>
        <div></div>
        <p>Create Sign In validation</p>
        <a>...</a>
      </div>
      <div className={styles.bodyContent}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies eget neque, libero, massa morbi aliquam ornare. Et tristique sit faucibus suspendisse massa sit turpis vitae. Aliquam eget ipsum ut viverra est porta. Odio velit et, egestas in netus. Porttitor amet erat scelerisque aenean enim tortor, gravida quisque. Egestas dui non commodo phasellus nibh volutpat nulla in. 
        </p>
      </div>
      <div className={styles.footerContent}>
        <p>Created March 30, 2021 1:24pm</p>
      </div>
    </div>
  );
}