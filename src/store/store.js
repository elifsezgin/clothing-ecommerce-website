import { compose, createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./rootReducer";
import { rootSaga } from "./rootSaga";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user", "categories"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
  sagaMiddleware,
].filter(Boolean);
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
