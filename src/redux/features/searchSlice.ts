import { ISearch } from './../../core/interface/search';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const initialState: ISearch = {
  keyword: "",
}

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    SearchKeyword: (state, action: PayloadAction<ISearch>): ISearch => {
      return {
        keyword: action.payload.keyword
      }
    }
  }
});


export const { SearchKeyword } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search;

export default searchSlice.reducer;

