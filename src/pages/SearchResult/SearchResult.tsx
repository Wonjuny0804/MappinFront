import React from 'react';
import styles from "./Search.module.scss";
import commonStyles from "../../styles/common.module.scss";
import { SearchInput, PageNav, Icon } from "../../components";
import { useHistory } from "react-router-dom";

function SearchResult() {

  const history = useHistory();

  const handleOnGoBack = (): void => {
    history.goBack();
  };

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
    
      <PageNav prevOnClick={handleOnGoBack} />
      {/* <IconButton
        type="button"
        onClick={handleOnGoBack}
        icon="Prev"
        className={styles.goBack}
      /> */}
    </main>
  )
}

export default SearchResult
