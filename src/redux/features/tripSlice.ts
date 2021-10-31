import { Ipath, Iplace } from '../../core/interface/trip';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { Itrip } from "../../core/interface/trip";
import moment from "moment";

// Define the initial state using that type
const initialState: Itrip = {
  title: "myFirstTrip",
  startDate: moment().format(),
  endDate: moment().format(),
  memo: "",
  paths: [],
}

export const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    AddPlace: (state, action: PayloadAction<Ipath>) => {
      if (state.paths.length === 0) {
        return {
          ...state, 
          paths: [{
            id: action.payload.id || 1,
            places: action.payload.places
          }]
        }
      } else {
        return {
          ...state, 
          paths: state.paths.map((path) => {
            if (path.id !== action.payload.id) return path;

            return {
              ...path,
              places: action.payload.places
            }
          })
        }
      }
    },
  },
})

export const { AddPlace } = tripSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectTrip = (state: RootState) => state.trip;

export default tripSlice.reducer