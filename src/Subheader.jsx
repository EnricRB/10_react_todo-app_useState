import styles from "./Subheader.module.css";

export const Subheader = ({ subtitle}) => {
    return <h1 className={styles["container"]}>{subtitle}</h1>;
};