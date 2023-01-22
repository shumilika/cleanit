
export const TURN_ON_LOG_OUT_PAGE = 'TURN_ON_LOG_OUT_PAGE';
export const SET_CURRENT_USER_EMAIL = 'SET_CURRENT_USER_EMAIL';
export const SET_CURRENT_USER_ROLE = 'SET_CURRENT_USER_ROLE';
export const FILL_CARD_DATA = 'FILL_CARD_DATA';



export const turnOnLogOutPageAction=loginState=>{
    return{
        type: TURN_ON_LOG_OUT_PAGE,
        payload: loginState
    }
}
export const setCurrentUserEmailAction=currentEmail=>{
    return{
        type: SET_CURRENT_USER_EMAIL,
        payload: currentEmail
    }
}
export const setCurrentUserRoleAction=currentUserRole=>{
    return{
        type: SET_CURRENT_USER_ROLE,
        payload: currentUserRole
    }
}
export const fillCardDataAction = data=>{
    return{
        type:FILL_CARD_DATA,
        payload:data
    }
}

