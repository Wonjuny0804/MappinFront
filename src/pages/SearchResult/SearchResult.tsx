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
        <p className={styles.headerPhrase}>검색한 관광지가 이곳이 맞나요? 맞다면 +버튼을 클릭해 주세요.</p>
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
