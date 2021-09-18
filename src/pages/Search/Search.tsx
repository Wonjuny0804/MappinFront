import React, { useState, useEffect } from "react";
import {
  SearchInput,
  RecommendCard,
  RecommendKeyword,
  PageNav,
  Icon,
} from "../../components/";
import styles from "./Search.module.scss";
import commonStyles from "../../styles/common.module.scss";
import { useHistory } from "react-router-dom";
import { RootState } from "../../redux/store";
import { searchPlaceAction } from "../../redux/storage/search";
import Map from "components/Map/Map";
import { useSelector, useDispatch } from "react-redux";

function Search() {
  // const [recommendWords, setRecommendWords] = useState<
  //   Array<{ name: string; url: string }>
  // >([]);

  const dispatch = useDispatch();
  const keyWord = useSelector((state: RootState) => state.search.searchKeyWord);

  const history = useHistory();

  const handleOnGoBack = (): void => {
    history.goBack();
  };

  const handleOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const { value } = target;

    if (e.keyCode === 13 && value !== "") {
      dispatch(searchPlaceAction(value));
      target.value = "";
    }
  };

  const props = {
    onKeyUp: handleOnEnter,
  };

  return (
    <main className={styles.pageLayout}>
      <div className={styles.header}>
        <h1 className={commonStyles.headerTitle}>관광지 검색</h1>
        <div className={commonStyles.headerPhrase}>
          <p>꼭 가고 싶은 장소 검색을 통해 일정을 추천받아보세요.</p>
        </div>
      </div>
      <SearchInput
        id="searchInput"
        name="search"
        type="search"
        secondary={false}
        label="가고싶은 곳을 검색해 보세요"
        icon={<Icon type="Search" />}
        rest={props}
      />

      {/* <section className={styles.recommendWord}>
        <h2>추천 검색어</h2>
        <div>
          {recommendWords &&
            recommendWords.map((word) => (
              <RecommendCard cardTitle={word.name} backgroundURL={word.url} />
            ))}
        </div>
      </section> */}
      {/* <section className={styles.recommendKeyword}>
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
      </section> */}
      {keyWord && (
        <Map
          searchKeyWord={keyWord}
          width="1200px"
          height="434px"
          className={styles.mapStyle}
        />
      )}
      <PageNav prevOnClick={handleOnGoBack} />
    </main>
  );
}

export default Search;
