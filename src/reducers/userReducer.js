import {FILL_USER_INFO} from "../actions/UserActions";


const initialState = {
     userInfo:{}
}


export const userReducer=(state=initialState,action)=>{
    switch (action.type){
        case FILL_USER_INFO:
            return {...state,userInfo: action.payload}
        default:
            return state

    }
}