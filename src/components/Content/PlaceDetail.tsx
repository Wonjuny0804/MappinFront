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
}

//
function PlaceDetail({ place }: PlaceDetailProps): JSX.Element {
  return (
    <article className={styles.content}>
      <Icon type="Ellipse" />
      <img src={place?.thumbnail} alt={`${place?.name}의 이미지`} />
      <div className={styles.details}>
        <h2> {place?.name}</h2>
        <div className={styles.keyword}>
          {place?.keywords.map((keyword) => (
            <Keyword title={keyword} />
          ))}
        </div>
        <p>{place?.detail}</p>
      </div>
    </article>
  );
}

export default PlaceDetail;
