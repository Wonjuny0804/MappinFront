import axios from "axios";
import { Moment } from "moment";
import { authHeader } from "utils/auth";
import { clear, error, success } from "./alert";
import { place } from "./place";
import { fetchAllTrip } from "./trip";

const SET_MY_TRIP = "나만의 일정 생성";
const ADD_NEW_PLACE = "새로운 여행 장소 추가";
const DELETE_PLACE = "여행 장소 삭제";
const EDIT_MY_TRIP_TITLE = "일정 제목 변경";

const SET_NEW_DAY = "새로운 일정 추가";

const POST_MY_TRIP_REQUEST = "여행 장소 저장 요청";
const POST_MY_TRIP_SUCCESS = "여행 장소 저장 성공";
const POST_MY_TRIP_FAIL = "여행 장소 저장 실패";

const EDIT_MY_TRIP_REQUEST = "여행 장소 수정 요청";
const EDIT_MY_TRIP_SUCCESS = "여행 장소 수정 성공";
const EDIT_MY_TRIP_FAIL = "여행 장소 수정 실패";

const DELETE_MY_TRIP_REQUEST = "여행 장소 삭제 요청";
const DELETE_MY_TRIP_SUCCESS = "여행 장소 삭제 성공";
const DELETE_MY_TRIP_FAIL = "여행 장소 삭제 실패";

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
  title: string;
  day: number;
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

export const setMyTripAction = (myTrip: myTrip | null) => {
  return { type: SET_MY_TRIP, myTrip: myTrip };
};

export const addNewTripAction = (
  index: number,
  day: number,
  newPlace: place
) => {
  return { type: ADD_NEW_PLACE, newTrip: { index, day, newPlace } };
};

export const setNewDayAction = (day: number) => {
  return { type: SET_NEW_DAY, day: day };
};

export const deletePlaceAction = (index: number, day: number) => {
  return { type: DELETE_PLACE, newTrip: { index, day } };
};

export const editTripTitleAction = (title: string) => {
  return { type: EDIT_MY_TRIP_TITLE, title: title };
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
          dispatch({ type: POST_MY_TRIP_SUCCESS });
          // 모든일정 재요청 (추후에 모든 일정 재요청말고 추가된것만 기존의 일정에 붙혀넣기로 바꾸기)
          dispatch(fetchAllTrip());
          dispatch(success("성공적으로 저장 되었습니다"));
          setTimeout(() => {
            dispatch(clear());
          }, 3000);
        })
        .catch((err) => {
          dispatch({ type: POST_MY_TRIP_FAIL });
          dispatch(error("저장중 오류가 발생했습니다"));
          setTimeout(() => {
            dispatch(clear());
          }, 3000);
        });
    }
  };
};

export const editTripAction = (myTrip: myTrip, id: number) => {
  return (dispatch: any) => {
    const option = {
      headers: {
        Authorization: authHeader(),
        "Content-Type": "application/json",
      },
    };
    if (authHeader()) {
      dispatch({ type: EDIT_MY_TRIP_REQUEST });
      axios
        .patch(
          `/api/v1/trips/${id}`,
          JSON.stringify({
            ...myTrip,
            startDate: myTrip.startDate.format("YYYY-MM-DD"),
            endDate: myTrip.endDate.format("YYYY-MM-DD"),
          }),
          option
        )
        .then(({ data }) => {
          console.log(data);
          dispatch({ type: EDIT_MY_TRIP_SUCCESS });
          dispatch(success("성공적으로 저장 되었습니다"));
          setTimeout(() => {
            dispatch(clear());
          }, 3000);
        })
        .catch((err) => {
          dispatch({ type: EDIT_MY_TRIP_FAIL });
          dispatch(error("저장중 오류가 발생했습니다"));
          setTimeout(() => {
            dispatch(clear());
          }, 3000);
        });
    }
  };
};

export const deleteTripAction = (id: number) => {
  return (dispatch: any) => {
    const option = {
      headers: {
        Authorization: authHeader(),
      },
    };
    if (authHeader()) {
      dispatch({ type: DELETE_MY_TRIP_REQUEST });
      axios
        .delete(`/api/v1/trips/${id}`, option)
        .then(({ data }) => {
          dispatch({ type: DELETE_MY_TRIP_SUCCESS });
          // 모든일정 재요청 (추후에 모든 일정 재요청말고 추가된것만 기존의 일정에 붙혀넣기로 바꾸기)
          dispatch(fetchAllTrip());
          dispatch(success("성공적으로 삭제 되었습니다"));
          setTimeout(() => {
            dispatch(clear());
          }, 3000);
        })
        .catch((err) => {
          dispatch({ type: DELETE_MY_TRIP_FAIL });
          dispatch(error("삭제중 오류가 발생했습니다"));
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
    case SET_NEW_DAY:
      return {
        ...state,
        myTrip: {
          ...state.myTrip,
          paths: [...state.myTrip.paths, { id: action.day, places: [] }],
        },
      };
    case ADD_NEW_PLACE:
      let places: any = state.myTrip.paths[
        action.newTrip.day - 1
      ].places.slice();
      places.splice(action.newTrip.index, 0, action.newTrip.newPlace);

      return {
        ...state,
        myTrip: {
          ...state.myTrip,
          paths: state.myTrip.paths.map((path) => {
            if (path.id === action.newTrip.day) {
              return { id: path.id, places: places };
            }
            return { id: path.id, places: path.places };
          }),
        },
      };
    case DELETE_PLACE:
      return {
        ...state,
        myTrip: {
          ...state.myTrip,
          paths: state.myTrip.paths.map((path) => {
            if (path.id === action.newTrip.day) {
              return {
                id: path.id,
                places: path.places.filter((place: place, index: number) => {
                  return index !== action.newTrip.index;
                }),
              };
            }
            return { id: path.id, places: path.places };
          }),
        },
      };

    case EDIT_MY_TRIP_TITLE:
      return {
        ...state,
        myTrip: { ...state.myTrip, title: action.title },
      };
    default:
      return state;
  }
}
