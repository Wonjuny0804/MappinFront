import React, { useState, useEffect } from "react";
import {
  SearchInput,
  RecommendCard,
  RecommendKeyword,
  IconButton,
  PageNav,
  Icon,
} from "../../components/";
import styles from "./Search.module.scss";
import commonStyles from "../../styles/common.module.scss";
import { useHistory } from "react-router-dom";
import Map from "../../components/Map/Map";

function Search() {
  const [recommendWords, setRecommendWords] = useState<
    Array<{ name: string; url: string }>
  >([]);

  const [keywords, setKeywords] = useState<Array<Array<string>>>([]);

  const history = useHistory();

  const handleOnGoBack = (): void => {
    history.goBack();
  };

  useEffect(() => {}, []);

  return (
    <main className={styles.pageLayout}>
      <div className={commonStyles.header}>
        <h1 className={commonStyles.headerTitle}>관광지 검색</h1>
        <div className={commonStyles.headerPhrase}>
          <p>꼭 가고 싶은 장소 검색을 통해 일정을 추천받아보세요.</p>
        </div>
      </div>
      <SearchInput
        id="searchInput"
        name="search"
        type="search"
        label="가고싶은 곳을 검색해 보세요"
        icon={<Icon type="Search" />}
      />
      <section className={styles.recommendWord}>
        <h2>추천 검색어</h2>
        <div>
          {recommendWords &&
            recommendWords.map((word) => (
              <RecommendCard cardTitle={word.name} backgroundURL={word.url} />
            ))}
        </div>
      </section>
      <section className={styles.recommendKeyword}>
        <h2>추천 키워드</h2>
        <div>
          {keywords &&
            keywords.map((word) => (
              <RecommendKeyword
                keywords={word}
                // onClick={}
              />
            ))}
        </div>
        {/* <Map /> */}
      </section>
      <PageNav prevOnClick={handleOnGoBack} />
      {/* <IconButton
        type="button"
        onClick={handleOnGoBack}
        icon="Prev"
        className={styles.goBack}
      /> */}
    </main>
  );
}

export default Search;
