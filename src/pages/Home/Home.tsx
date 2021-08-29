import { useEffect } from "react";
import { Icon, Button, RecommendCard } from "../../components";
import styles from "./Home.module.scss";
import commonStyles from "../../styles/common.module.scss";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import TripInfoCard from "../../components/TripInfoCard/TripInfoCard";
import { fetchAllTrip } from "../../redux/storage/trip";
import TripWishCard from "../../components/TripWishCard/TripWishCard";

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
            <section className={styles.mytrip}>
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
            </section>

            <section className={styles.wishTrip}>
              <h2 className={styles.serviceTitle}>찜하신 일정</h2>
              <TripWishCard
                title="나를 위로하는 애월 여행"
                imageURL="https://s3-alpha-sig.figma.com/img/104b/9b70/d314b24f0654ef100d9c33b0e73794f8?Expires=1630886400&Signature=F8Bs9kk~tlcTLr1mxz3NZKhQNnlVWBixj1l0cdbFnENZwnrDGfEA0n1Dc3kqHA~L3SPz5gL6GlFYc4dafltQCgTzU1f5BBMnFLBoC3XPG0q6B~~KgFjK6LJg6tHR5cUOSxAuw9XA2GLpHXo4vX-ewat-cuYeprDsWztRDZRDu8JorWWBYvRySuSIiCRCSCQ7eDCnpj4JgV~cll3JBdrZhoOJGZYIz0hJPi8JmGZxF-eIAvdMUOxg5OT012al4WMcZ599czAhxsHx3dAW6Rx1J74t91ofjVN19QxxmUclUlsFWYiYQHC0UVrHJt41Sc7CZmvsmJkG-DR9Ge6SnK8xsw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              />
            </section>
          </>
        ) : loggingIn || loadingProfile ? (
          <span className={styles.loading}>
            <Icon type="Spinner" />
          </span>
        ) : (
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
