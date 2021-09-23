import axios from "axios";
import { Moment } from "moment";
import { authHeader } from "utils/auth";
import { clear, error, success } from "./alert";
import { place } from "./place";

const SET_MY_TRIP = "나만의 일정 생성";
const ADD_MY_TRIP = "새로운 여행 장소 추가";
const DELETE_MY_TRIP = "여행 장소 삭제";
const POST_MY_TRIP_REQUEST = "여행 장소 저장 요청";
const POST_MY_TRIP_SUCCESS = "여행 장소 저장 성공";
const POST_MY_TRIP_FAIL = "여행 장소 저장 실패";

// 필요한거 추가해서 쓰기
export interface myTrip {
  title: string;
  startDate: Moment;
  endDate: Moment;
  memo: string;
  paths: any;
}
interface actionProps {
  type: string;
  myTrip: myTrip;
  newTrip: any;
  index: number;
}

const initialState = {
  myTrip: {
    endDate: null,
    startDate: null,
    paths: [
      {
        id: null,
        places: [],
      },
    ],
  },
};

export const setMyTripAction = (myTrip: myTrip) => {
  return { type: SET_MY_TRIP, myTrip: myTrip };
};

export const addNewTripAction = (index: number, newPlace: place) => {
  return { type: ADD_MY_TRIP, newTrip: { index, newPlace } };
};

export const deleteTripAction = (index: number) => {
  return { type: DELETE_MY_TRIP, index: index };
};

export const postTripAction = (myTrip: myTrip) => {
  return (dispatch: any) => {
    const option = {
      headers: {
        Authorization: authHeader(),
        "Content-Type": "application/json",
      },
    };
    if (authHeader()) {
      dispatch({ type: POST_MY_TRIP_REQUEST });
      axios
        .post(
          `/api/v1/trips`,
          JSON.stringify({
            ...myTrip,
            startDate: myTrip.startDate.format("YYYY-MM-DD"),
            endDate: myTrip.endDate.format("YYYY-MM-DD"),
          }),
          option
        )
        .then(({ data }) => {
          console.log(data);
          dispatch({ type: POST_MY_TRIP_SUCCESS });
          dispatch(success("성공적으로 저장 되었습니다"));
          setTimeout(() => {
            dispatch(clear());
          }, 3000);
        })
        .catch((err) => {
          console.log(err.message);
          dispatch({ type: POST_MY_TRIP_FAIL });
          dispatch(error("저장중 오류가 발생했습니다"));
          setTimeout(() => {
            dispatch(clear());
          }, 3000);
        });
    }
  };
};

export function mytripReducer(state = initialState, action: actionProps) {
  switch (action.type) {
    case SET_MY_TRIP:
      return {
        ...state,
        myTrip: action.myTrip,
      };
    case ADD_MY_TRIP:
      let places: any = state.myTrip.paths[0].places.slice();
      places.splice(action.newTrip.index, 0, action.newTrip.newPlace);
      return {
        ...state,
        myTrip: {
          ...state.myTrip,
          paths: [
            {
              places: places,
            },
          ],
        },
      };
    case DELETE_MY_TRIP:
      return {
        ...state,
        myTrip: {
          ...state.myTrip,
          paths: [
            {
              places: state.myTrip.paths[0].places.filter(
                (place: place, index: number) => {
                  return index !== action.index;
                }
              ),
            },
          ],
        },
      };
    default:
      return state;
  }
}
