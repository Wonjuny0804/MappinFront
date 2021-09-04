import styles from "./FavoriteButton.module.scss";
import Icon from "../Icon/Icon";

interface ButtonProps {
  isFavored: boolean;
  onClick: () => void;
}

function FavoriteButton({ isFavored, onClick }: ButtonProps): JSX.Element {
  return (
    <button className={styles.favorite} type="button" onClick={onClick}>
      {isFavored ? <Icon type="FillHeart" /> : <Icon type="EmptyHeart" />}
    </button>
  );
}

export default FavoriteButton;
