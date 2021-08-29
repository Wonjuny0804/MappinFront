import React, { useEffect, useRef } from "react";
import styles from "./RecommendCard.module.scss";

interface RecommendCardProps {
  cardTitle: string;
  backgroundURL: string;
}

function RecommendCard({
  cardTitle,
  backgroundURL,
}: RecommendCardProps): JSX.Element {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.background = ` linear-gradient(0deg, rgba(52, 52, 52, 0.3), rgba(52, 52, 52, 0.3)), url(${backgroundURL})`;
      buttonRef.current.style.backgroundPosition = "center";
    }
  }, []);

  return (
    <button ref={buttonRef} type="submit" className={styles.card}>
      {cardTitle}
    </button>
  );
}

export default RecommendCard;
