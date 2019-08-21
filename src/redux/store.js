import logger from "redux-logger";

import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const middlewares = [logger];

export const Store = createStore(rootReducer, applyMiddleware(...middlewares));
export const Persistor = persistStore(Store);
export default { Store, Persistor };
