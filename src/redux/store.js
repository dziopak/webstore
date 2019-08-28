import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import { collectionsFetch } from "./shop/shop.sagas";
import { positionsFetch } from "./menu/menu.sagas";
import { bestsellersFetch } from "./rankings/rankings.sagas";

import rootReducer from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const Store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(collectionsFetch);
sagaMiddleware.run(positionsFetch);
sagaMiddleware.run(bestsellersFetch);

export const Persistor = persistStore(Store);
export default { Store, Persistor };
