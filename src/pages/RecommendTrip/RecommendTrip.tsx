import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Button, Icon, PageNav } from "../../components";
import Map from "../../components/Map/Map";
import styles from "./RecommendTrip.module.scss";
import commonStyles from "../../styles/common.module.scss";
import Slider from "react-slick";
import TripRecommendCard from "../../components/TripRecommendCard/TripRecommendCard";

const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
};

function RecommendTrip() {
  const history = useHistory();
  const slider = useRef<Slider | null>(null);
  const handleOnGoBack = (): void => {
    history.push("/search");
  };

  return (
    <main className={commonStyles.page}>
      <header className={commonStyles.header}>
        <h1 className={commonStyles.headerTitle}>일정 선택</h1>
        <div className={commonStyles.headerPhrase}>
          <p>검색하신 관광지 포함한 여행 일정입니다.</p>
          <p> 하나를 선택하여 나만의 일정을 만들어보세요 :)</p>
        </div>
      </header>
      <section>
        <Map />
        <div className={styles.recommendation}>
          <h2>여행 일정 추천</h2>
          <div className={styles.sliderNav}>
            <Button
              secondary
              type="button"
              disabled={true}
              onClick={() => slider?.current?.slickPrev()}
            >
              <Icon type="Prev" />
            </Button>
            <Button
              secondary
              type="button"
              onClick={() => slider?.current?.slickNext()}
            >
              <Icon type="Next" />
            </Button>
          </div>
          <Slider ref={slider} {...settings} className={styles.slider}>
            <div className={styles.card}>
              <TripRecommendCard
                title="안녕하신가요"
                style={{ marginRight: "30px" }}
              />
            </div>
            <div className={styles.card}>
              <TripRecommendCard title="dqwdwq" />
            </div>
          </Slider>
        </div>
      </section>
      <PageNav prevOnClick={handleOnGoBack} />
    </main>
  );
}

export default RecommendTrip;
