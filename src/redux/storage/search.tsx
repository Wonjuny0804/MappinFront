
const SEARCH_PLACE = "장소 검색";

interface actionProps {
  type: string;
  keyWord: string;
}

const initialState = {
  searchKeyWord: "",
};

export const searchPlaceAction = (keyWord: string) => {
  return { type: SEARCH_PLACE, keyWord: keyWord }
}

export function searchReducer(state = initialState, action: actionProps) {
  switch (action.type) {
    case SEARCH_PLACE:
      return {
        ...state,
        searchKeyWord: action.keyWord
      };
    default:
      return state;
  }
}