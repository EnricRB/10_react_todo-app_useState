import styles from "./ListContainer.module.css";

export const ListContainer = ({ children }) => {
  return <main className={styles.container}>{children}</main>;
};