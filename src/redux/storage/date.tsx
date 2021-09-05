const SET_DATE = "여행 기간 설정";

interface actionProps {
  type: string;
  startDate: string;
  endDate: string;
}

const initialState = {
  startDate: "",
  endDate: ""
}

export function dateReducer(state = initialState, action: actionProps) {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        startDate: action.startDate,
        endDate: action.endDate
      };
    default:
      return state
  }
}