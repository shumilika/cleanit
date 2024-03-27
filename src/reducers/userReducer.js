import {FILL_USER_INFO, SET_IS_UPDATE_CARDS} from "../actions/UserActions";


const initialState = {
     userInfo:{},
     isUpdateCards:false
}


export const userReducer=(state=initialState,action)=>{
    switch (action.type){
        case FILL_USER_INFO:
            return {...state,userInfo: action.payload}
        case SET_IS_UPDATE_CARDS:
            return {...state, isUpdateCards: action.payload}
        default:
            return state

    }
}