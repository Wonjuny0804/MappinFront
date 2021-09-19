import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Button, Icon, PageNav } from "../../components";
import styles from "./MyTrip.module.scss";
import commonStyles from "../../styles/common.module.scss";
import Slider from "react-slick";
import TripRecommendCard from "../../components/TripRecommendCard/TripRecommendCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import RecommendedMap from "components/Map/RecommendedMap";
import Card from "components/Card/Card";
import PlaceDetail from "components/Content/PlaceDetail";

function MyTrip() {
  const history = useHistory();
  const slider = useRef<Slider | null>(null);

  const { mytrip }: any = useSelector((state: RootState) => state.mytrip);
  const handleOnGoBack = (): void => {
    history.push("/recommended-trip");
  };
  const dispatch = useDispatch();
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   if (selectedPlace) {
  //     dispatch(fetchRecommendedTrip(789.789, 321.321));
  //   }
  // }, [dispatch, selectedPlace]);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    afterChange: (current: any) => setCurrentSlide(current),
  };

  return (
    <main className={commonStyles.page}>
      <header className={commonStyles.header}>
        <h1 className={commonStyles.headerTitle}>일정 선택</h1>
        <div className={commonStyles.headerPhrase}>
          <p>선택하신 여행 일정입니다. 나만의 일정으로 만들어보세요!</p>
        </div>
      </header>
      <section>
        <div className={styles.recommendation}>
          <h2>나를 위로하는 애월 여행</h2>
          <div className={styles.sliderNav}>
            <Button
              secondary
              type="button"
              onClick={() => slider?.current?.slickPrev()}
              disabled={currentSlide === 0}
            >
              <Icon type="Prev" />
            </Button>
            <Button
              secondary
              type="button"
              onClick={() => slider?.current?.slickNext()}
              // disabled={currentSlide === paths?.length - 1}
            >
              <Icon type="Next" />
            </Button>
          </div>
          <Slider ref={slider} {...settings} className={styles.slider}>
            {mytrip?.paths?.map((path: any, index: number) => {
              return (
                <div className={styles.card} key={index}>
                  <Card>
                    <PlaceDetail index={index + 1} place={path.places[0]} />
                  </Card>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
      <PageNav prevOnClick={handleOnGoBack} />
    </main>
  );
}

export default MyTrip;
