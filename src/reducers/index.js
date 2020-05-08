import { combineReducers } from "redux";
import itemsReducers from "./itemsReducers";

export default combineReducers({
    items: itemsReducers
})