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
import IconButton from "components/IconButton/IconButton";
import Card from "components/Card/Card";
import PlaceDetail from "components/Content/PlaceDetail";
import classNames from "classnames";

function MyTrip() {
  const history = useHistory();
  const slider = useRef<Slider | null>(null);

  const { mytrip }: any = useSelector((state: RootState) => state.mytrip);
  const handleOnGoBack = (): void => {
    history.push("/recommended-trip");
  };
  const dispatch = useDispatch();
  const [verticalMode, setVerticalMode] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    afterChange: (current: any) => setCurrentSlide(current),
  };

  const toggleMode = () => {
    setVerticalMode(!verticalMode);
  };

  const mapContent = () => {
    return mytrip?.paths?.map((path: any, index: number) => {
      return (
        <div className={styles.cardContainer} key={index}>
          <div className={styles.card}>
            <Card>
              <PlaceDetail index={index + 1} place={path.places[0]} />
            </Card>
            {editMode && (
              <Button secondary styling={styles.addBtn} type="button">
                <>
                  <Icon type="PlusGrey" /> 추가
                </>
              </Button>
            )}
          </div>
        </div>
      );
    });
  };

  return (
    <main className={commonStyles.page}>
      <header className={commonStyles.header}>
        <h1 className={commonStyles.headerTitle}>일정 선택</h1>
        <div className={commonStyles.headerPhrase}>
          <p>선택하신 여행 일정입니다. 나만의 일정으로 만들어보세요!</p>
        </div>
      </header>
      <section className={styles.container}>
        <div className={styles.mytrip}>
          <header className={verticalMode ? styles.verticalHeader : ""}>
            <h2>나를 위로하는 애월 여행</h2>

            <div
              className={classNames(
                verticalMode && styles.editModeOption,
                styles.options
              )}
            >
              <div className={styles.dayContainer}>
                <Button secondary type="button" styling={styles.active}>
                  Day 1
                </Button>
                <IconButton
                  className={styles.newDayBtn}
                  type="button"
                  icon="PlusGrey"
                ></IconButton>
              </div>
              {verticalMode && (
                <div className={styles.optionContainer}>
                  {!editMode && (
                    <IconButton
                      onClick={() => setEditMode(true)}
                      type="button"
                      icon="Edit"
                    ></IconButton>
                  )}
                  <Button
                    rounded
                    type="button"
                    styling={classNames(
                      styles.saveBtn,
                      editMode && styles.editModeSave
                    )}
                    onClick={() => setEditMode(false)}
                  >
                    <>
                      <span className={styles.btnStatus}>
                        {editMode && "완료"}
                      </span>
                      <Icon type="Save" />
                    </>
                  </Button>
                </div>
              )}
            </div>
          </header>

          <div className={styles.sliderContainer}>
            {!verticalMode && (
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
            )}

            {verticalMode ? (
              mapContent()
            ) : (
              <Slider ref={slider} {...settings} className={styles.slider}>
                {mapContent()}
              </Slider>
            )}
          </div>
        </div>
        {mytrip && !verticalMode && (
          <IconButton
            type="button"
            onClick={toggleMode}
            className={styles.showAllBtn}
            icon="CaretDown"
          ></IconButton>
        )}
      </section>

      <PageNav prevOnClick={handleOnGoBack} />
    </main>
  );
}

export default MyTrip;
