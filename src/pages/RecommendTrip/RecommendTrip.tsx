import { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Button, Icon, PageNav } from "../../components";
import styles from "./RecommendTrip.module.scss";
import commonStyles from "../../styles/common.module.scss";
import Slider from "react-slick";
import TripRecommendCard from "../../components/TripRecommendCard/TripRecommendCard";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { fetchRecommendedTrip } from "../../redux/storage/trip";
import { RootState } from "redux/store";
import RouteMap from "components/Map/RouteMap";
import { setMyTripAction } from "redux/storage/mytrip";

function RecommendTrip() {
  const history = useHistory();
  const slider = useRef<Slider | null>(null);

  // const { selectedPlace }: any = useSelector((state: RootState) => state.place);
  // const { paths }: any = useSelector((state: RootStateOrAny) => state.trip);
  // const { myTrip }: any = useSelector((state: RootStateOrAny) => state.mytrip);

  // const { startDate, endDate } = useSelector((state: RootState) => state.date);

  const handleOnGoBack = (): void => {
    history.push("/search");
  };

  const handleOnNext = (): void => {
    history.push("/my-trip");
  };

  const dispatch = useDispatch();
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   if (selectedPlace) {
  //     dispatch(fetchRecommendedTrip(selectedPlace.lat, selectedPlace.lng));
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

  // const handleCreateNewTrip = () => {
  //   dispatch(
  //     setMyTripAction({
  //       title: "나만의 여행",
  //       startDate: startDate,
  //       endDate: endDate,
  //       memo: "test",
  //       paths: [
  //         {
  //           id: 1,
  //           places: [selectedPlace],
  //         },
  //       ],
  //     })
  //   );
  //   history.push("/my-trip");
  // };

  return (
    // <main className={commonStyles.page}>
    //   <header className={commonStyles.header}>
    //     <h1 className={commonStyles.headerTitle}>일정 선택</h1>
    //     <div className={commonStyles.headerPhrase}>
    //       <p>검색하신 관광지 포함한 여행 일정입니다.</p>
    //       <p> 하나를 선택하여 나만의 일정을 만들어보세요 :)</p>

    //       <Button
    //         type="button"
    //         styling={styles.makeNew}
    //         onClick={handleCreateNewTrip}
    //       >
    //         나만의 일정 만들기
    //       </Button>
    //     </div>
    //   </header>
    //   <section>
    //     {/* 임시로 첫번째 path넣어둠. 백에서 존재하지 않는 좌표값을 줘서 현재 마커는 안찍힘 */}

    //     <RouteMap
    //       places={paths && paths[0].places}
    //       width="1200px"
    //       height="434px"
    //     />

    //     <div className={styles.recommendation}>
    //       <h2>여행 일정 추천</h2>
    //       {paths ? (
    //         <>
    //           <div className={styles.sliderNav}>
    //             <Button
    //               secondary
    //               type="button"
    //               onClick={() => slider?.current?.slickPrev()}
    //               disabled={currentSlide === 0}
    //             >
    //               <Icon type="Prev" />
    //             </Button>
    //             <Button
    //               secondary
    //               type="button"
    //               onClick={() => slider?.current?.slickNext()}
    //               disabled={currentSlide === paths?.length - 1}
    //             >
    //               <Icon type="Next" />
    //             </Button>
    //           </div>
    //           <Slider ref={slider} {...settings} className={styles.slider}>
    //             {paths?.map((path: any, index: number) => {
    //               return (
    //                 <div className={styles.card} key={index}>
    //                   <TripRecommendCard
    //                     index={index + 1}
    //                     title={`${index + 1}`}
    //                     style={{ marginRight: "30px" }}
    //                     path={path.places}
    //                   />
    //                 </div>
    //               );
    //             })}
    //           </Slider>
    //         </>
    //       ) : (
    //         <p className={styles.noPathText}>추천 일정이 없어요</p>
    //       )}
    //     </div>
    //   </section>
    //   <PageNav
    //     prevOnClick={handleOnGoBack}
    //     nextOnClick={handleOnNext}
    //     hideNext={!!!myTrip}
    //   />
    // </main>
    <div></div>
  );
}

export default RecommendTrip;
