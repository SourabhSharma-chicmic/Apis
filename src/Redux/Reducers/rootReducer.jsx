import { combineReducers } from "redux";
import SaveUserReducer from "./SaveUserReducer";

const rootReducer = combineReducers({
    SaveUser :SaveUserReducer
});

export default rootReducer;
