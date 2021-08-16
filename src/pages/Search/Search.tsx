import React from 'react';
import { SearchInput } from "../../components/";

function Search() {
    return (
        <main>
            <div>
                <h1>관광지 검색</h1>
                <h2>꼭 가고 싶은 장소 검색을 통해 일정을 추천받아보세요.</h2>
            </div>
            <SearchInput />
            <section>
              <h2>추천 검색어</h2>
              <div>

              </div>
            </section>
            <section>
              <h2>추천 키워드</h2>
              <div></div>
            </section>
        </main>
    )
}

export default Search
