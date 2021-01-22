import { combineReducers } from "redux";
import { postReducer } from "./posts";
import { userReducer } from "./user";

const appReducer = combineReducers({
    user: userReducer,
    posts: postReducer,
});

export default appReducer;