import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./storage";

/* ------------------------------- 미드웰어 ------------------------------ */

const middlewares = [thunk];

/* ---------------------------------- 스토어 --------------------------------- */

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

/* ------------------------ 스토어 공급자 ------------------------ */

interface ProviderProps {
  children: JSX.Element;
}

export const StoreProvider = ({ children }: ProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;