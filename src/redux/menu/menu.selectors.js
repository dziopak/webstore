import { createSelector } from "reselect";

const selectMenu = state => state.menu;

export const selectMenuPositions = createSelector(
  [selectMenu],
  menu => menu.menu_positions
);
