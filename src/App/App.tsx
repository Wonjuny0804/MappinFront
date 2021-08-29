import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./App.module.scss";
import { Home, Schedule } from "../pages";
import { NavBar } from "../components/";
import Search from "../pages/Search/Search";
import { fetchProfile } from "../redux/storage/auth";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import Alert from "../components/Alert/Alert";
import commonStyles from "../styles/common.module.scss";
import RecommendTrip from "../pages/RecommendTrip/RecommendTrip";

function App() {
  const dispatch = useDispatch();
  const { message, type } = useSelector((state: RootStateOrAny) => state.alert);

  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  return (
    <div className="App">
      <div className={commonStyles.page}>
        {message && <Alert content={message} type={type} />}
      </div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/recommended-trip" component={RecommendTrip} />
      </Switch>

      <footer className={styles.footer}></footer>
    </div>
  );
}

export default App;
