import React from "react";
import className from "classnames";
import styles from "./Card.module.scss";

interface CardProps {
  children?: string | Node;
}

function Card({ children }: CardProps): JSX.Element {
  return <div className={styles.card}>{children}</div>;
}

export default Card;
