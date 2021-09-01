import { combineReducers } from "redux";
import todo from "./todo";
import modal from "./modal";

const rootReducer = combineReducers({ todo, modal });

export default rootReducer;
