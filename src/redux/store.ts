/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducer";
import rootSaga from "./saga";
import { createInjectorsEnhancer } from "redux-injectors";
import createReducer from "./reducer";

const configureAppStore = () => {
  const reduxSagaOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaOptions);

  const { run: runSaga } = sagaMiddleware;

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer: (injectedReducers) => rootReducer(injectedReducers),
      runSaga
    })
  ];

  const store = configureStore({
    reducer: createReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middlewares),
    devTools: false,
    enhancers: enhancers as any
  });

  sagaMiddleware.run(rootSaga);

  return { store };
};

const store = configureAppStore();

export default store;
