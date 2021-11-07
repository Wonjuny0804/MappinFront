import { useEffect } from "react";
import { Icon, Button } from "../../components";
import styles from "./Home.module.scss";
import commonStyles from "../../styles/common.module.scss";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import TripInfoCard from "../../components/TripInfoCard/TripInfoCard";
import { fetchAllTrip } from "../../redux/storage/trip";
import TripWishCard from "../../components/TripWishCard/TripWishCard";
import { setDateAction } from "redux/storage/date";
import { deleteTripAction, setMyTripAction } from "redux/storage/mytrip";
import { setPlaceAction } from "redux/storage/place";
import { searchPlaceAction } from "redux/storage/search";
import moment from "moment";

function Home() {
  const history = useHistory();
  const authInfo = useSelector(
    (state: RootStateOrAny) => state.auth
  );
  const { trip: trips, isLoading } = useSelector(
    (state: RootStateOrAny) => state.trip
  );

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (user) {
  //     dispatch(fetchAllTrip());
  //   }
  // }, [dispatch, user]);

  const handleOnCreate = (): void => {
    // 이전에 작성하던것이 있다면 전부 초기화
    dispatch(setDateAction(null, null));
    dispatch(searchPlaceAction(""));
    dispatch(setPlaceAction(null));
    dispatch(setMyTripAction(null));
    history.push("/schedule");
  };

  const handleOnView = (id: number): void => {
    const selectedTrip = trips?.find((trip: any) => {
      return trip.id === id;
    });

    dispatch(
      setMyTripAction({
        ...selectedTrip,
        startDate: moment(selectedTrip.startDate, "YYYY-MM-DD"),
        endDate: moment(selectedTrip.endDate, "YYYY-MM-DD"),
      })
    );
    history.push({ pathname: "/my-trip", state: { id: id } });
  };

  const handleRemoveTrip = (id: number) => {
    dispatch(deleteTripAction(id));
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
        {authInfo ? (
          <>
            <h2 className={styles.serviceTitle}>
              {authInfo}님의 여행 일정
            </h2>
            {/* TODO: trip 인터페이스로 교체 */}
            <section className={styles.mytrip}>
              {isLoading && <TripInfoCard loading={isLoading} />}
              {trips?.map((trip: any) => {
                return (
                  <TripInfoCard
                    key={trip.id}
                    title={trip.title}
                    imageURL="https://images.unsplash.com/photo-1595737361672-ae84c6ca2298?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    startDate={new Date(trip.startDate)}
                    endDate={new Date(trip.endDate)}
                    onView={() => handleOnView(trip.id)}
                    onRemove={() => handleRemoveTrip(trip.id)}
                  />
                );
              })}
              <TripInfoCard addNew onClick={handleOnCreate} />
            </section>

            <section className={styles.wishTrip}>
              <h2 className={styles.serviceTitle}>찜하신 일정</h2>
              <TripWishCard
                title="나를 위로하는 애월 여행"
                imageURL="https://s3-alpha-sig.figma.com/img/104b/9b70/d314b24f0654ef100d9c33b0e73794f8?Expires=1633305600&Signature=BGB-yzy7FwoOYSVMPIo9e0GNe~KuRXPyuoR6vfXou7EmrbaG7sNjGflCdZYXI35mvcXAtlickA5LaAjOmDOx1~Hkgf-T6bOo-cjb9mQENThh~ASUaR8HePaQfGUY1oZDpU6qyWU11q-Qn6ELBYUlDd1fBtZIZ9gos~Suxf3KGLiqYCR~uZ1Py1mxiJfNCOEzzrmc5EBaEE8um1WuS6D3X2GjaIuX7Ot7-cCMotVrZ-3w7iSN8OLpXweMiKm9d6fuQmuBVrlxQEoEpfRvdgW8br-4CveTKGmbhaWKX~dNBY6quDNziA0UcNRaOsZHoaVujmLF~a5GIcGLpSGPhKeT6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              />
            </section>
          </>
        ) : (
          // loggingIn || loadingProfile ? (
          //   <span className={styles.loading}>
          //     <Icon type="Spinner" />
          //   </span>
          // ) :
          <div className={styles.trips}>
            <Icon type="NomadMap" />
            <p>여행 일정을 만들어보세요!</p>
            <Button
              type="button"
              children="일정 만들기"
              secondary={false}
              styling={styles.button}
              onClick={handleOnCreate}
            />
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
