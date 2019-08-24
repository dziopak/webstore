import logger from "redux-logger";
import thunk from "redux-thunk";

import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const middlewares = [thunk];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const Store = createStore(rootReducer, applyMiddleware(...middlewares));
export const Persistor = persistStore(Store);
export default { Store, Persistor };
