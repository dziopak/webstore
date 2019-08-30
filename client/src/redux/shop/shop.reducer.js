import shopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMsg: undefined
};

const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.COLLECTIONS_FETCH:
      return {
        ...state,
        isFetching: true
      };

    case shopActionTypes.COLLECTIONS_DID_FETCH:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };

    case shopActionTypes.COLLECTIONS_FETCH_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMsg: action.payload
      };

    default:
      return state;
  }
};

export default collectionReducer;
