import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import sagas from "./sagas";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

export default store;
