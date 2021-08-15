import styles from "./Keyword.module.scss";

interface KeywordProps {
  title: string;
}

function Keyword({ title }: KeywordProps): JSX.Element {
  return <span className={styles.keyword}>{title}</span>;
}

export default Keyword;
