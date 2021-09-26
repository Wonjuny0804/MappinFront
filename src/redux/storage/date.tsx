import { Moment } from "moment";
const SET_DATE = "여행 기간 설정";

interface actionProps {
  type: string;
  startDate: Moment;
  endDate: Moment;
}

const initialState = {
  startDate: null,
  endDate: null,
};

export const setDateAction = (
  startDate: Moment | null,
  endDate: Moment | null
) => {
  return {
    type: SET_DATE,
    startDate,
    endDate,
  };
};

export function dateReducer(state = initialState, action: actionProps) {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        startDate: action.startDate,
        endDate: action.endDate,
      };
    default:
      return state;
  }
}
