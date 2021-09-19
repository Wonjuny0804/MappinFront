const SET_MY_TRIP = "나만의 일정 생성";

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
}

const initialState = {
  myTrip: null,
};

export const setMyTripAction = (myTrip: myTrip | null) => {
  return { type: SET_MY_TRIP, myTrip: myTrip };
};

export function mytripReducer(state = initialState, action: actionProps) {
  switch (action.type) {
    case SET_MY_TRIP:
      return {
        ...state,
        mytrip: action.myTrip,
      };
    default:
      return state;
  }
}
