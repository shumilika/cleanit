import {cleaningsReducer} from "../reducers/CleaningsReducers";
import {createStore} from "redux";



export const store = createStore(cleaningsReducer)