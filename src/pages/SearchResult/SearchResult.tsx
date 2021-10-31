import React from "react";
import styles from "./SearchResult.module.scss";
import commonStyles from "../../styles/common.module.scss";
import { SearchInput, PageNav, Icon, Map } from "../../components";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "redux/hook";

// 이페이지는 필요없을듯
function SearchResult() {
  const history = useHistory();

  const keyWord = useAppSelector(state => state.search.keyword);
  const handleOnGoBack = (): void => {
    history.goBack();
  };

  return (
    <main className={styles.pageLayout}>
      <div className={commonStyles.header}>
        <h1 className={commonStyles.headerTitle}>관광지 검색</h1>
        <p className={styles.headerPhrase}>
          검색한 관광지가 이곳이 맞나요? 맞다면 +버튼을 클릭해 주세요.
        </p>
      </div>
      <SearchInput
        id="searchInput"
        name="search"
        type="search"
        secondary={true}
        label="가고싶은 곳을 검색해 보세요"
        icon={<Icon type="Search" />}
        value={keyWord}
        disabled={true}
      />

      <Map
        searchKeyWord={keyWord}
        width="1200px"
        height="434px"
        className={styles.mapStyle}
      />

      <PageNav prevOnClick={handleOnGoBack} />
    </main>
  );
}

export default SearchResult;
