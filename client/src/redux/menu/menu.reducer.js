import menuActionTypes from "./menu.types";

const INITIAL_STATE = {
  menu_positions: []
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case menuActionTypes.POSITIONS_FETCH:
      return {
        ...state,
        isFetching: true
      };

    case menuActionTypes.POSITIONS_DID_FETCH:
      return {
        ...state,
        isFetching: false,
        menu_positions: action.payload
      };

    case menuActionTypes.POSITIONS_FETCH_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMsg: action.payload
      };

    default:
      return state;
  }
};

export default menuReducer;
