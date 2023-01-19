import { combineReducers } from "redux";
import nowPageReducer from "./nowPageRedux";

const RootReducer = combineReducers({
    nowPageReducer,
});

export default RootReducer;
