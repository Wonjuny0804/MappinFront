import { useEffect } from "react";
import { Icon, Button, RecommendCard } from "../../components";
import styles from "./Home.module.scss";
import commonStyles from "../../styles/common.module.scss";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import TripInfoCard from "../../components/TripInfoCard/TripInfoCard";
import { fetchAllTrip } from "../../redux/storage/trip";
import moment from "moment";

function Home() {
  const history = useHistory();
  const { user, loggingIn, loadingProfile } = useSelector(
    (state: RootStateOrAny) => state.auth
  );
  const { trip: trips, isLoading } = useSelector(
    (state: RootStateOrAny) => state.trip
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(fetchAllTrip());
    }
  }, [dispatch, user]);

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
        {user ? (
          <>
            <h2 className={styles.serviceTitle}>
              {user.nickName}님의 여행 일정
            </h2>
            {/* TODO: trip 인터페이스로 교체 */}
            <div className={styles.mytrip}>
              {isLoading && <TripInfoCard loading={isLoading} />}

              {trips?.map((trip: any, index: number) => {
                return (
                  <TripInfoCard
                    key={index}
                    title={trip.title}
                    imageURL="https://images.unsplash.com/photo-1595737361672-ae84c6ca2298?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    startDate={new Date(trip.startDate)}
                    endDate={new Date(trip.endDate)}
                  />
                );
              })}
              <TripInfoCard addNew onClick={handleOnClick} />
            </div>
          </>
        ) : 
        // loggingIn || loadingProfile ? (
        //   <span className={styles.loading}>
        //     <Icon type="Spinner" />
        //   </span>
        // ) : 
        (
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
        )}
      </section>
    </div>
  );
}

export default Home;
