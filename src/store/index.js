import { combineReducers } from "redux";
import nowPageReducer from "./nowPageRedux";
import nowAsyncReducer from "./useAsyncReducer";

const RootReducer = combineReducers({
    nowPageReducer,
    nowAsyncReducer,
});

export default RootReducer;
