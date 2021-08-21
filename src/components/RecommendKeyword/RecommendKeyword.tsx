import React from "react";
import styles from "./RecommendKeyword.module.scss";

interface RecommendKeywordProps {
  keywords : Array<string>;
  onClick: () => void;
}

function RecommendKeyword({ keywords, onClick }: RecommendKeywordProps): JSX.Element {
  return (
    <div className={styles.cardWrapper}>
      <h3>관심 키워드</h3>
      <div className={styles.keywordsWrapper}>
      {keywords.map((keyword, index) => <button type="button" key={index} onClick={onClick}>{keyword}</button>)}
      </div>
    </div>
  )
}

export default RecommendKeyword
