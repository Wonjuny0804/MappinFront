import React from "react";
import { IconButton } from "components";
import styles from "./CustomOverlay.module.scss";

interface CustomOverlayProps {
  name: string;
  keywords?: Array<string>;
  onClick?: () => void;
}

function CustomOverlay ({
  name,
  keywords,
  onClick
}: CustomOverlayProps): JSX.Element {
  return (
  <div className={styles.overlayWrapper} id="customOverlay">
    <h2 className={styles.overlayTitle}>{name}</h2>
    <div className={styles.keywords}>
      {keywords ? keywords.map((keyword, index) => <span key={index}>{keyword}</span>
      ): <span>아직 키워드가 없습니다.</span>}
    </div>
    <IconButton type="button" icon="AddPlace" onClick={onClick} className={styles.addButton}/>
  </div>
  )
} 

export default CustomOverlay;