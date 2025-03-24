import { ItemCard } from "./ItemCard";
import styles from "./ItemsList.module.css"

export const ItemsList = ({ itemsList }) => {
  return (
    <ul className={styles.grid}>
      {itemsList.map((item) => {
        const { id } = item;
        return <ItemCard key={id} item={item} />;
      })}
    </ul>
  );
};
