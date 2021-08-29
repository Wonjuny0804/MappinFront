import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Button, Icon, PageNav } from "../../components";
import Map from "../../components/Map/Map";
import styles from "./RecommendTrip.module.scss";
import commonStyles from "../../styles/common.module.scss";
import Slider from "react-slick";
import TripRecommendCard from "../../components/TripRecommendCard/TripRecommendCard";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { fetchRecommendedTrip } from "../../redux/storage/trip";

function RecommendTrip() {
  const history = useHistory();
  const slider = useRef<Slider | null>(null);
  const handleOnGoBack = (): void => {
    history.push("/search");
  };
  const dispatch = useDispatch();
  const { paths } = useSelector((state: RootStateOrAny) => state.trip);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    dispatch(fetchRecommendedTrip(789.789, 321.321));
  }, []);

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
              onClick={() => slider?.current?.slickPrev()}
              disabled={currentSlide === 0}
            >
              <Icon type="Prev" />
            </Button>
            <Button
              secondary
              type="button"
              onClick={() => slider?.current?.slickNext()}
              disabled={currentSlide === paths?.length - 1}
            >
              <Icon type="Next" />
            </Button>
          </div>
          <Slider ref={slider} {...settings} className={styles.slider}>
            {paths?.map((path: any, index: number) => {
              return (
                <div className={styles.card} key={index}>
                  <TripRecommendCard
                    index={index + 1}
                    title={`${index + 1}`}
                    style={{ marginRight: "30px" }}
                    path={path.places}
                  />
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

export default RecommendTrip;
