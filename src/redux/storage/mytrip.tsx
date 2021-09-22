import { place } from "./place";

const SET_MY_TRIP = "나만의 일정 생성";
const ADD_MY_TRIP = "새로운 여행 장소 추가";
const DELETE_MY_TRIP = "여행 장소 삭제";

// 필요한거 추가해서 쓰기
export interface myTrip {
  title: string;
  startDate: string;
  endDate: string;
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