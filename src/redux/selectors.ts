import { GlobalState, RootState } from "@/types";
import { createSelector } from "@reduxjs/toolkit";

const selectDomain = (state: RootState): GlobalState => state.global || {};

export const selectIsLoading = createSelector(
  selectDomain,
  (state) => state.isLoading
);
export const selectAppLoading = createSelector(
  selectDomain,
  (state) => state.appLoading
);
export const selectGlobal = createSelector(selectDomain, (state) => state);
