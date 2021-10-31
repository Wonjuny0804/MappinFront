import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import tripReducer from "./features/tripSlice";
import searchReducer from "./features/searchSlice";



/* ---------------------------------- 스토어 --------------------------------- */


export const store = configureStore({
  reducer: {
    trip: tripReducer,
    search: searchReducer
  }
})

/* ------------------------ 스토어 공급자 ------------------------ */

interface ProviderProps {
  children: JSX.Element;
}

export const StoreProvider = ({ children }: ProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;