import {combineReducers} from "redux";
import {userReducer} from './userReducer';
import {cleaningsReducer} from './cleaningsReducer';



export const rootReducer = combineReducers(
    {
        user: userReducer,
        clean: cleaningsReducer
    }
)