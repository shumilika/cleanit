import {CHANGE_CLEANING_PAGE} from "../actions/CleaningsActions";

const initialState = {
    page:'RegularlyCleaning'
}
export const cleaningsReducer=(state=initialState,action)=>{
    switch (action.type){
        case CHANGE_CLEANING_PAGE:
            return {...state, page: action.payload}
        default:
            return state

    }
}