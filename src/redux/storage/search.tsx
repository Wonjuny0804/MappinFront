
const SEARCH_PLACE = "장소 검색";

interface actionProps {
  type: string;
  keyWord: string;
}

const initialState = {
  searchKeyWord: "",
};

export const searchPlaceAction = () => (dispatch: any) => {
  dispatch({ type: SEARCH_PLACE });
  return 0;
}

export function searchReducer(state = initialState, action: actionProps) {
  switch (action.type) {
    case SEARCH_PLACE:
      return {
        searchKeyWord: action.keyWord
      };
    default:
      return state;
  }
}