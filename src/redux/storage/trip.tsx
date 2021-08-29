import axios from "axios";
import { authHeader } from "../../utils/auth";
import { clear, error } from "./alert";

const TRIP_REQUEST_ALL = "모든 여행 일정 조회 ";
const TRIP_FETCH_SUCCESS = "모든 여행 일정 조회 성공 ";
const TRIP_FETCH_FAIL = "모든 여행 일정 조회 실패 ";

export const fetchAllTrip = () => {
  return (dispatch: any) => {
    const option = {
      headers: {
        Authorization: authHeader(),
      },
    };
    if (authHeader()) {
      dispatch({
        type: TRIP_REQUEST_ALL,
      });
      axios
        .get("/api/v1/trips/my", option)
        .then(({ data }) => {
          if (data.result !== "SUCCESS") {
            dispatch({
              type: TRIP_FETCH_FAIL,
            });
          } else if (data.result === "SUCCESS") {
            dispatch({ type: TRIP_FETCH_SUCCESS, trip: data.data });
          }
        })
        .catch((err) => {
          console.log(err);
          dispatch({
            type: TRIP_FETCH_FAIL,
          });
          dispatch(error("내 모든 여행 일정 조회중 에러가 발생했습니다"));
          setTimeout(() => {
            dispatch(clear());
          }, 3000);
        });
    }
  };
};

interface actionProps {
  type: string;
  trip: Object; // TODO: 인터페이스 교체
}

const initialState = {
  isLoading: false,
  trip: null,
};

export function tripReducer(state = initialState, action: actionProps) {
  switch (action.type) {
    case TRIP_REQUEST_ALL:
      return {
        isLoading: true,
      };
    case TRIP_FETCH_SUCCESS:
      return {
        isLoading: false,
        trip: action.trip,
      };
    case TRIP_FETCH_FAIL:
      return initialState;
    default:
      return state;
  }
}
