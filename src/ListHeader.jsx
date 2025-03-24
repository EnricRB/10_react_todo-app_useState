import styles from "./ListHeader.module.css";

export const ListHeader = ({ content}) => {
    return <h1 className={styles["container"]}>{content}</h1>;
};