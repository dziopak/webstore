import menuActionTypes from "./menu.types";

export const positionsFetch = () => ({
  type: menuActionTypes.POSITIONS_FETCH
});

export const positionsDidFetch = positions => ({
  type: menuActionTypes.POSITIONS_DID_FETCH,
  payload: positions
});

export const positionsFetchFail = errorMsg => ({
  type: menuActionTypes.POSITIONS_FETCH_FAIL,
  payload: errorMsg
});
