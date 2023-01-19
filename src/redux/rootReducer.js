import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import usersReducer from "./user/usersReducer";

export const initialRootState = {cake:{}, users:{}}

const rootReducer = combineReducers({
    cake: cakeReducer,
    users: usersReducer
})

export default rootReducer