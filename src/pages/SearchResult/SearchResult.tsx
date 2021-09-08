import React from 'react';
import styles from "./SearchResult.module.scss";
import commonStyles from "../../styles/common.module.scss";
import { SearchInput, PageNav, Icon, Map } from "../../components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from 'redux/store';

function SearchResult() {

  const history = useHistory();
  const keyWord = useSelector((state: RootState) => state.search);
  console.log(keyWord);

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
        secondary={true}
        label="가고싶은 곳을 검색해 보세요"
        icon={<Icon type="Search" />}
        value={keyWord.searchKeyWord}
      />

      <Map searchKeyWord={keyWord.searchKeyWord} width="1200px" height="434px" className={styles.mapStyle}/>
    
      <PageNav prevOnClick={handleOnGoBack} />
    </main>
  )
}

export default SearchResult
