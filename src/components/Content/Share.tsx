import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import styles from "./Share.module.scss";

function Share(): JSX.Element {
  return (
    <div className={styles.share}>
      <h3>가족 및 친구와 이 장소를 공유하세요</h3>
      <div className={styles.container}>
        <Button
          type="button"
          onClick={() => console.log("카카오 공유")}
          rounded
          styling={styles.kakao}
        >
          <Icon type="Kakao" />
        </Button>
        <Button
          type="button"
          onClick={() => console.log("네이버 공유")}
          rounded
          styling={styles.naver}
        >
          <Icon type="Naver" />
        </Button>
        <Button
          type="button"
          onClick={() => console.log("페북 공유")}
          rounded
          styling={styles.facebook}
        >
          <Icon type="Facebook" />
        </Button>
      </div>
      <input />
    </div>
  );
}

export default Share;
