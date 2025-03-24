import styles from "./ItemCard.module.css"

export const ItemCard = ({ item }) => {
    const { title, description, status } = item;

    const titleClass =
        status === "done"
        ? `${styles.title} ${styles["title--completed"]}`
        : status === "in progress"
        ? `${styles.title} ${styles["title--inProgress"]}`
        : status === "pending"
        ? `${styles.title} ${styles["title--pending"]}`
        : "";

    const statusClass =
        status === "done"
        ? `${styles.status} ${styles["status--completed"]}`
        : status === "in progress"
        ? `${styles.status} ${styles["status--inProgress"]}`
        : status === "pending"
        ? `${styles.status} ${styles["status--pending"]}`
        : "";

    return (
        <li className={styles.card}>
            <h4 className={titleClass}>{title}</h4>
            <p className={styles.description}>{description}</p>
            <span className={statusClass}>{status}</span>
        </li>
    );
};