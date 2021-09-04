import React, { useEffect, useRef } from "react";
import styles from "./TripWishCard.module.scss";
import Skeleton from "react-loading-skeleton";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Keyword from "../Keyword/Keyword";

interface TripWishCardProps {
  loading?: boolean;
  title?: string;
  onClick?: () => void;
  imageURL: string;
}

function TripWishCard({
  title,
  loading,
  onClick,
  imageURL,
}: TripWishCardProps): JSX.Element {
  const divImageSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divImageSectionRef.current) {
      const $div = divImageSectionRef.current;
      $div.style.backgroundImage = `linear-gradient(90deg, #60D1A9 0%, rgba(96, 209, 169, 0.76) 46.97%, rgba(96, 209, 169, 0) 75.93%), url(${imageURL})`;
      $div.style.backgroundPosition = "center";
    }
  }, []);

  return (
    <article className={styles.cardWrapper}>
      <div className={styles.image} ref={divImageSectionRef}>
        <div className={styles.content}>
          <header>
            <h3>{title}</h3>
            <FavoriteButton
              isFavored={true}
              onClick={() => console.log("favored")}
            />
          </header>
          <div className={styles.keyword}>
            <Keyword title="제주도" />
            <Keyword title="힐링" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default TripWishCard;
