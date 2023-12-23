import {FILL_USER_INFO, GET_USER_PHOTO_URL} from "../actions/UserActions";


const initialState = {
     userInfo:{},
    photoUrl:''
}


export const userReducer=(state=initialState,action)=>{
    switch (action.type){
        case FILL_USER_INFO:
            return {...state,userInfo: action.payload}
        case GET_USER_PHOTO_URL:
            return {...state, photoUrl: action.payload}
        default:
            return state

    }
}