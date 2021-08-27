import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./App.module.scss";
import { Home, Schedule } from "../pages";
import { NavBar } from "../components/";
import Search from "../pages/Search/Search";
import { fetchProfile } from "../redux/storage/auth";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/search" component={Search} />
      </Switch>

      <footer className={styles.footer}></footer>
    </div>
  );
}

export default App;
