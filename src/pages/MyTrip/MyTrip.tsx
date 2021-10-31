import React, { useState, useCallback, useRef, ChangeEvent } from "react";
import { useHistory } from "react-router-dom";
import { Button, Icon, PageNav } from "../../components";
import styles from "./MyTrip.module.scss";
import commonStyles from "../../styles/common.module.scss";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import IconButton from "components/IconButton/IconButton";
import Card from "components/Card/Card";
import PlaceDetail from "components/Content/PlaceDetail";
import classNames from "classnames";
import {
  deletePlaceAction,
  editTripAction,
  editTripTitleAction,
  postTripAction,
  setNewDayAction,
} from "redux/storage/mytrip";
import RouteMap from "components/Map/RouteMap";
import { useAppSelector } from "redux/hook";

// location.state 는 인덱스(숫자일경우)이거나 edit상태여부임
// location.state 가 edit일때는 세로모드/수정모드가 초기값
// location.state 가 인덱스일때는 뒤로가기 위치가 일정 선택페이지가 아닌 schedule 페이지

function MyTrip({ location }: any) {
  const history = useHistory();
  const slider = useRef<Slider | null>(null);

  // const { myTrip }: any = useSelector((state: RootState) => state.mytrip);
  const myTrip = useAppSelector(state => state.trip);

  const handleOnGoBack = (): void => {
    location?.state?.id ? history.push("/") : history.goBack();
  };

  const dispatch = useDispatch();

  const [verticalMode, setVerticalMode] = useState(
    location.state?.mode === "edit" ? true : false
  );
  const [editMode, setEditMode] = useState(
    location.state?.mode === "edit" ? true : false
  );

  const [selectedDay, setSelectedDay] = useState(
    location.state?.day ? location.state.day : 1
  );

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
    return myTrip?.paths[selectedDay - 1]?.places?.map(
      (path: any, index: number) => {
        return (
          <div
            className={styles.cardContainer}
            style={
              editMode ? { marginBottom: "50px" } : { marginBottom: "100px" }
            }
            key={index}
          >
            <div className={styles.card}>
              <Card>
                <PlaceDetail
                  index={index + 1}
                  place={path}
                  editMode={editMode}
                  onRemove={() => handleDeletePlace(index, selectedDay)}
                />
              </Card>
              {editMode && (
                <Button
                  onClick={() => handleAddPlace(index + 1, selectedDay)}
                  secondary
                  styling={styles.addBtn}
                  type="button"
                >
                  <>
                    <Icon type="PlusGrey" /> 추가
                  </>
                </Button>
              )}
            </div>
          </div>
        );
      }
    );
  };

  const handleAddPlace = (index: number, day: number) => {
    history.push({ pathname: "/search", state: { index, day } });
  };

  const handleDeletePlace = (index: number, day: number) => {
    dispatch(deletePlaceAction(index, day));
  };

  const handleTitleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(editTripTitleAction(e.target.value));
    },
    [dispatch]
  );

  const handleSaveTrip = () => {
    // if (editMode) {
    //   setEditMode(false); // 수정모드 해제
    // } else if (location?.state?.id) {
    //   // 편집일때
    //   dispatch(editTripAction(myTrip, location.state.id, history));
    // } else {
    //   // 새로운 여행 추가일때
    //   dispatch(postTripAction(myTrip, history));
    // }
  };
  console.log(myTrip)
  return (
    <main className={commonStyles.page}>
      <header className={commonStyles.header}>
        <h1 className={commonStyles.headerTitle}>
          여행 일정 {editMode && "수정"}
        </h1>
        <div className={commonStyles.headerPhrase}>
          <p>
            {editMode
              ? "일정을 자유롭게 편집하고 여행지를 추가해보세요!"
              : "선택하신 여행 일정입니다. 나만의 일정으로 만들어보세요!"}
          </p>
        </div>
      </header>
      <RouteMap
        places={myTrip?.paths[selectedDay - 1]?.places}
        width="1200px"
        height="434px"
      />
      <section className={styles.container}>
        <div className={styles.mytrip}>
          <header className={verticalMode ? styles.verticalHeader : ""}>
            {editMode ? (
              <h2>
                <input
                  onChange={handleTitleChange}
                  defaultValue={myTrip.title}
                />
              </h2>
            ) : (
              <h2>{myTrip.title}</h2>
            )}

            <div
              className={classNames(
                styles.options,
                verticalMode && styles.editModeOption
              )}
            >
              <div className={styles.dayContainer}>
                {myTrip.paths.map((path: any) => {
                  return (
                    <Button
                      key={path.id}
                      secondary
                      type="button"
                      styling={selectedDay === path.id ? styles.active : ""}
                      onClick={() => setSelectedDay(path.id)}
                    >
                      {`Day ${path.id}`}
                    </Button>
                  );
                })}

                <IconButton
                  className={styles.newDayBtn}
                  type="button"
                  icon="PlusGrey"
                  onClick={() => {
                    dispatch(setNewDayAction(selectedDay + 1));
                    setSelectedDay(selectedDay + 1);
                  }}
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
                    onClick={handleSaveTrip}
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
                  disabled={
                    currentSlide ===
                    myTrip?.paths[selectedDay - 1]?.places.length - 1
                  }
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

        <div className={styles.emptyTrip}>
          {myTrip?.paths[selectedDay - 1]?.places?.length === 0 && (
            <Button
              type="button"
              onClick={() => handleAddPlace(0, selectedDay)}
              styling={styles.createNew}
            >
              일정 만들기
            </Button>
          )}
        </div>

        {myTrip && !verticalMode && (
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
