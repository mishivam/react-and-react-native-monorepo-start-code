import { useMemo } from "react";
import logger from "redux-logger";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";


import rootReducer from "../slices";

import { rootSaga } from "../saga";
import storage from "./storage";

let store: any;

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
  timeout: null,
};

function initStore(initialState: AppState) {
  const middleware:any[] = [sagaMiddleware as SagaMiddleware];
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  if (process.env.NODE_ENV === "development") {
    middleware.push(logger);
    return configureStore({
      reducer: persistedReducer,
      middleware: [...middleware],
      devTools: true,
      initialState,
    });
  }

  return configureStore({
    reducer: persistedReducer,
    middleware: [...middleware],
    devTools: false,
    initialState,
  });
}

export const initializeStore = (preloadedState: AppState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  _store.sagaTask = sagaMiddleware.run(rootSaga);
  _store.persistor = persistStore(_store);

  return _store;
};

export function useStore(initialState: AppState) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}

export type AppState = ReturnType<typeof rootReducer>;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
