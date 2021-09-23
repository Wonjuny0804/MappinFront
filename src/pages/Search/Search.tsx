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
import { setPlaceAction } from "redux/storage/place";

function Search({ location }: any) {
  // const [recommendWords, setRecommendWords] = useState<
  //   Array<{ name: string; url: string }>
  // >([]);

  const dispatch = useDispatch();
  const keyWord = useSelector((state: RootState) => state.search.searchKeyWord);
  const { selectedPlace }: any = useSelector((state: RootState) => state.place);

  const history = useHistory();

  // location.state 는 장소가 추가될 인덱스를 가지고있음 (이값이 undefined가 아니라면 전 단계가 수정 페이지)
  const handleOnGoBack = (): void => {
    !location.state
      ? history.push("./schedule")
      : history.push({ pathname: "/my-trip", state: "edit" });
  };

  const handleOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const { value } = target;

    if (e.keyCode === 13 && value !== "") {
      dispatch(setPlaceAction(null));
      dispatch(searchPlaceAction(value));
    }
  };

  const inputProps = {
    onKeyUp: handleOnEnter,
  };

  return (
    <main className={styles.pageLayout}>
      <div className={styles.header}>
        <h1 className={commonStyles.headerTitle}>
          관광지 {location.state ? "추가" : "검색"}
        </h1>
        <div className={commonStyles.headerPhrase}>
          <p>
            {location.state
              ? "여행일정에 추가하실 관광지를 검색해주세요"
              : keyWord
              ? "검색한 관광지가 이곳이 맞나요? 맞다면 +버튼을 클릭해 주세요."
              : "꼭 가고 싶은 장소 검색을 통해 일정을 추천받아보세요."}
          </p>
        </div>
      </div>
      <SearchInput
        id="searchInput"
        name="search"
        type="search"
        secondary={false}
        label="가고싶은 곳을 검색해 보세요"
        icon={<Icon type="Search" />}
        value={!location.state ? selectedPlace?.name : ""}
        rest={inputProps}
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
          searchKeyWord={selectedPlace?.name || keyWord}
          width="1200px"
          height="434px"
          className={styles.mapStyle}
          editIndex={location.state}
        />
      )}
      <PageNav prevOnClick={handleOnGoBack} />
    </main>
  );
}

export default Search;
