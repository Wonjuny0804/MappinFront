import Icon from "../Icon/Icon";
import Keyword from "../Keyword/Keyword";
import styles from "./PlaceDetail.module.scss";

// 세부 인터페이스는 필드값에 따라 변경후 사용바람
interface place {
  index: number | string;
  name: string;
  keywords: Array<string>;
  detail: string;
  thumbnail: string;
}

interface PlaceDetailProps {
  place?: place;
  index?: number;
}

//
function PlaceDetail({ place, index }: PlaceDetailProps): JSX.Element {
  return (
    <article className={styles.content}>
      <div className={styles.order}>
        <span className={styles.index}>{index}</span>
        <Icon type="Ellipse" />
      </div>
      <img
        src={place?.thumbnail || "/assets/fallback-image.png"}
        alt={`${place?.name}의 이미지`}
      />
      <div className={styles.details}>
        <h2>{place?.name}</h2>
        <div className={styles.keyword}>
          {place?.keywords[0] !== "" &&
            place?.keywords.map((keyword, index) => (
              <Keyword key={index} title={keyword} />
            ))}
        </div>
        <p>
          {place?.detail ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
        </p>
      </div>
    </article>
  );
}

export default PlaceDetail;
