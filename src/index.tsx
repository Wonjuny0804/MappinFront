import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StoreProvider } from "redux/store";


ReactDOM.render(
  <React.StrictMode>
      <StoreProvider>
        <Router>
          <App />
        </Router>
      </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
