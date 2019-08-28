import rankingsActionTypes from "./rankings.types";

const INITIAL_STATE = {
  bestsellers: null
};

const rankingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case rankingsActionTypes.BESTSELLERS_FETCH:
      return {
        ...state,
        isFetching: true
      };

    case rankingsActionTypes.BESTSELLERS_DID_FETCH:
      return {
        ...state,
        isFetching: false,
        bestsellers: action.payload
      };

    case rankingsActionTypes.BESTSELLERS_FETCH_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMsg: action.payload
      };

    default:
      return state;
  }
};

export default rankingsReducer;
