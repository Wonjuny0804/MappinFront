import React, { useEffect, useRef } from "react";
import styles from "./TripRecommend.module.scss";
import { DateToString } from "../../utils/date";
import Skeleton from "react-loading-skeleton";
import Icon from "../Icon/Icon";
import classNames from "classnames";
import Button from "../Button/Button";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

interface TripRecommendCardProps {
  index?: number;
  title?: string;
  style?: Object;
  path?: any;
}

function TripRecommendCard({
  index,
  title,
  style,
  path,
}: TripRecommendCardProps): JSX.Element {
  return (
    <article className={styles.cardWrapper} style={style}>
      <header className={styles.header}>
        <div className={styles.title}>
          <div className={styles.order}>
            <span className={styles.index}>{index}</span>
            <Icon type="Ellipse" />
          </div>
          <h3>{title}</h3>
        </div>

        <div className={styles.action}>
          <FavoriteButton
            isFavored={false}
            onClick={() => console.log("favored")}
          ></FavoriteButton>
          <Button type="button">선택</Button>
        </div>
      </header>

      <div className={styles.path}>
        {path?.map((place: any) => {
          return (
            <div className={styles.place} key={place.name}>
              <span className={styles.category}></span>
              <p>{place.name}</p>
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default TripRecommendCard;
