import { combineReducers } from "redux";
import itemsReducers from "./itemsReducers";
import alertReducer from './alertReducer';

export default combineReducers({
    items: itemsReducers,
    alert: alertReducer
})