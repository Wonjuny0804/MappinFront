import React, { useEffect, useRef } from "react";
import styles from "./TripInfoCard.module.scss";
import { DateToString } from "../../utils/date";
import Skeleton from "react-loading-skeleton";
import Icon from "../Icon/Icon";
import classNames from "classnames";

interface TripInfoCardProps {
  addNew?: boolean;
  onClick?: () => void;
  loading?: boolean;
  imageURL?: string;
  title?: string;
  startDate?: Date;
  endDate?: Date;
}

function TripInfoCard({
  addNew,
  onClick,
  loading,
  imageURL,
  title,
  startDate,
  endDate,
}: TripInfoCardProps): JSX.Element {
  const divImageSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divImageSectionRef.current) {
      const $div = divImageSectionRef.current;
      $div.style.backgroundImage = `url(${imageURL})`;
      $div.style.backgroundPosition = "center";
    }
  }, []);

  if (addNew) {
    return (
      <button
        className={classNames(styles.cardWrapper, styles.new)}
        onClick={onClick}
      >
        <Icon type="Plus" />
      </button>
    );
  }
  return (
    <article className={styles.cardWrapper}>
      {loading ? (
        <>
          <Skeleton height={190} />
          <div className={styles.information}>
            <h1>
              <Skeleton />
            </h1>
            <Skeleton />
          </div>
        </>
      ) : (
        <>
          <div className={styles.image} ref={divImageSectionRef} />
          <div className={styles.information}>
            <h1>{title}</h1>
            {startDate && endDate && <p>{DateToString(startDate, endDate)}</p>}
          </div>
        </>
      )}
    </article>
  );
}

export default TripInfoCard;
