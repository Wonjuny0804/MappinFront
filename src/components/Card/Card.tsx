import styles from "./Card.module.scss";

interface CardProps {
  children?: string | Node | JSX.Element;
}

function Card({ children }: CardProps): JSX.Element {
  return <div className={styles.card}>{children}</div>;
}

export default Card;
