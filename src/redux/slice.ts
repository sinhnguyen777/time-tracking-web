/* eslint-disable @typescript-eslint/no-unused-vars */
import { GlobalState } from "@/types/global-state";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const globalInitialState = {
  count: 0,
  isLoading: true,
  appLoading: false
} as GlobalState;

const globalSlice = createSlice({
  name: "global",
  initialState: globalInitialState,
  reducers: {
    init: (state: GlobalState, action: PayloadAction<null | undefined>) => {
      state.isLoading = true;
    },
    initSuccess(state: GlobalState, action: PayloadAction<null | undefined>) {
      state.isLoading = false;
    },
    initFailed(state: GlobalState, action: PayloadAction<null | undefined>) {
      state.isLoading = false;
    },

    setAppLoading(state, action: PayloadAction<boolean>) {
      state.appLoading = action.payload;
    }
  }
});

export const { actions: globalActions, reducer, name } = globalSlice;
