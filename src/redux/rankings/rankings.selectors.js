import { createSelector } from "reselect";

const selectRankings = state => state.rankings;

export const selectBestsellers = createSelector(
  [selectRankings],
  rankings => rankings.bestsellers
);
