import { applyMiddleware, createStore } from "redux";
import rootReducer from "./Reducers/rootReducer";
import createSagaMiddleware from "@redux-saga/core";
import { watchPostData } from "./Saga/saga";

const sagaMiddleware = createSagaMiddleware();
const Store = createStore(rootReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchPostData);

export default Store;