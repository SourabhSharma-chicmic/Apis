import { combineReducers } from "redux";
import DummyReducer from "./dummyReducer";

const rootReducer = combineReducers({
    dummy :DummyReducer
});

export default rootReducer;
