import axios from "axios";
import { authHeader } from "../../utils/auth";
import { clear, error } from "./alert";

const TRIP_REQUEST_ALL = "모든 여행 일정 조회";
const TRIP_FETCH_SUCCESS = "모든 여행 일정 조회 성공";
const TRIP_FETCH_FAIL = "모든 여행 일정 조회 실패";

const TRIP_REQUEST_RECOMMENDED = "추천 여행 일정 조회";
const TRIP_RECOMMENDED_SUCCESS = "추천 여행 일정 조회 성공";
const TRIP_RECOMMENDED_FAIL = "추천 여행 일정 조회 실패";

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

export const fetchRecommendedTrip = (lat: number, lng: number) => {
  return (dispatch: any) => {
    const option = {
      headers: {
        Authorization: authHeader(),
      },
      params: { lat, lng },
    };
    if (authHeader()) {
      dispatch({
        type: TRIP_REQUEST_RECOMMENDED,
      });
      axios
        .get("/api/v1/paths/recommend", option)
        .then(({ data }) => {
          if (data.result !== "SUCCESS") {
            dispatch({
              type: TRIP_RECOMMENDED_FAIL,
            });
          } else if (data.result === "SUCCESS") {
            dispatch({ type: TRIP_RECOMMENDED_SUCCESS, paths: data.data });
          }
        })
        .catch((err) => {
          console.log(err);
          dispatch({
            type: TRIP_FETCH_FAIL,
          });
          dispatch(error("추천 여행 일정 조회중 에러가 발생했습니다"));
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
  paths: Object;
}

const initialState = {
  isLoading: false,
  trip: null,
  isPathLoading: false,
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

    case TRIP_REQUEST_RECOMMENDED:
      return {
        isPathLoading: true,
      };
    case TRIP_RECOMMENDED_SUCCESS:
      return {
        isPathLoading: false,
        paths: action.paths,
      };
    case TRIP_FETCH_FAIL:
    case TRIP_RECOMMENDED_FAIL:
      return initialState;
    default:
      return state;
  }
}
