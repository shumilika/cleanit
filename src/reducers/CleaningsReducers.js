
import {
    FILL_CARD_DATA,
    SET_CURRENT_USER_EMAIL,
    SET_CURRENT_USER_ROLE,
    TURN_ON_LOG_OUT_PAGE
} from "../actions/CleaningsActions";


const initialState = {
    login:false,
    email:'',
    role:'cleaner',
    cardData:[],

}


export const cleaningsReducer=(state=initialState,action)=>{
    switch (action.type){

        case TURN_ON_LOG_OUT_PAGE:
            return {...state, login: action.payload}
        case SET_CURRENT_USER_ROLE:
            return {...state, role: action.payload}
        case SET_CURRENT_USER_EMAIL:
            return {...state, email: action.payload}
        case FILL_CARD_DATA:
            return {...state,cardData: action.payload}
        default:
            return state

    }
}