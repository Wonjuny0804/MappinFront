const SET_PLACE = "장소 선택";

// 필요한거 추가해서 쓰기
export interface place {
  name: string;
  lat: number;
  lng: number;
  keywords: string[];
}
interface actionProps {
  type: string;
  selectedPlace: place;
}

const initialState = {
  selectedPlace: null,
};

export const setPlaceAction = (place: place | null) => {
  return { type: SET_PLACE, selectedPlace: place };
};

export function placeReducer(state = initialState, action: actionProps) {
  switch (action.type) {
    case SET_PLACE:
      return {
        ...state,
        selectedPlace: action.selectedPlace,
      };
    default:
      return state;
  }
}
