import classNames from "classnames";
import { useDispatch } from "react-redux";
import { clear } from "../../redux/storage/alert";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import styles from "./Alert.module.scss";

interface AlertProps {
  type: string;
  content: string;
}

function Alert({ content, type }: AlertProps) {
  const dispatch = useDispatch();
  return (
    <div className={styles.wrapper}>
      <div
        className={classNames(
          styles.alert,
          type === "success" ? styles.success : styles.error
        )}
      >
        <div className={styles.content}>
          <div className={classNames(type === "error" && styles.redIcon)}>
            <Icon type="Marker" />
          </div>
          <div className={styles.detail}>
            <span>{content}</span>
          </div>
        </div>
        <Button
          styling={styles.closeBtn}
          secondary
          type="button"
          onClick={() => dispatch(clear())}
        >
          <Icon type="Close" />
        </Button>
      </div>
    </div>
  );
}

export default Alert;
