import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { EmailAuthReducer } from "./Sessions/reducers";

export const combinedReducers = history =>
  combineReducers({
    router: connectRouter(history),
    EmailAuth: EmailAuthReducer,
});