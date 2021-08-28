import React from "react";
import { Icon, Button } from "../../components";
import styles from "./Home.module.scss";
import commonStyles from "../../styles/common.module.scss";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
import { RootStateOrAny, useSelector } from "react-redux";

function Home() {
  const history = useHistory();
  const { user } = useSelector((state: RootStateOrAny) => state.auth);

  const handleOnClick = (): void => {
    history.push("/schedule");
  };

  return (
    <div>
      <header className={commonStyles.header}>
        <h1 className={classNames(commonStyles.headerTitle, styles.themeColor)}>
          한눈에 지도로 정리하는 여행 일정
        </h1>
        <div className={commonStyles.headerPhrase}>
          <p>꼭 여행하고 싶은 한 장소를 선택하면</p>
          <p>손쉽게 지도 위에 그려지는 여행 계획을 만나보세요.</p>
        </div>
      </header>
      <section className={styles.service}>
        {user && (
          <h2 className={styles.serviceTitle}>{user.nickName}님의 여행 일정</h2>
        )}
        <div className={styles.trips}>
          <Icon type="NomadMap" />
          <p>여행 일정을 만들어보세요!</p>
          <Button
            type="button"
            children="일정 만들기"
            secondary={false}
            styling={styles.button}
            onClick={handleOnClick}
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
