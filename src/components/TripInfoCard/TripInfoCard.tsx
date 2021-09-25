import React, { useState, useEffect, useRef } from "react";
import styles from "./TripInfoCard.module.scss";
import { DateToString } from "../../utils/date";
import Skeleton from "react-loading-skeleton";
import Icon from "../Icon/Icon";
import classNames from "classnames";
import { IconButton } from "components";

interface TripInfoCardProps {
  addNew?: boolean;
  onClick?: () => void;
  onView?: () => void;
  onRemove?: () => void;
  loading?: boolean;
  imageURL?: string;
  title?: string;
  startDate?: Date;
  endDate?: Date;
}

function TripInfoCard({
  addNew,
  onClick,
  onView,
  onRemove,
  loading,
  imageURL,
  title,
  startDate,
  endDate,
}: TripInfoCardProps): JSX.Element {
  const divImageSectionRef = useRef<HTMLDivElement>(null);
  const [hoverStyle, setHoverStyle] = useState({ display: "none" });
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
    <article
      className={styles.cardWrapper}
      onClick={onView}
      onMouseEnter={(e) => setHoverStyle({ display: "block" })}
      onMouseLeave={(e) => setHoverStyle({ display: "none" })}
    >
      <IconButton
        style={hoverStyle}
        className={styles.deleteBtn}
        type="button"
        icon="Remove"
        onClick={(e: any) => {
          e.stopPropagation();
          if (onRemove) {
            onRemove();
          }
        }}
      />
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
