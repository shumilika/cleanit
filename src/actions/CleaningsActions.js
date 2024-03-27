
export const TURN_ON_LOG_OUT_PAGE = 'TURN_ON_LOG_OUT_PAGE';
export const SET_CURRENT_USER_EMAIL = 'SET_CURRENT_USER_EMAIL';
export const SET_CURRENT_USER_ROLE = 'SET_CURRENT_USER_ROLE';
export const FILL_CARD_DATA = 'FILL_CARD_DATA';
export const SET_CURRENT_USER_UID = 'SET_CURRENT_USER_UID';
export const SET_FILTERED_DATA = 'SET_FILTERED_DATA';
export const SET_IS_FILTER = 'SET_IS_FILTER'
export const SET_FILTER_CHOOSED_CLEANNING_TYPE = 'SET_FILTER_CHOOSED_CLEANNING_TYPE'



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
export const setCurrentUserUID=currentUserUid=>{
    return{
        type: SET_CURRENT_USER_UID,
        payload: currentUserUid
    }
}
export const setFilteredData=filteredData=>{
    return{
        type: SET_FILTERED_DATA,
        payload: filteredData
    }
}

export const setIsFilter=isFilter=>{
    return{
        type: SET_IS_FILTER,
        payload: isFilter
    }
}

export const setFilterChoosedCleanningType=cleanningType=>{
    return{
        type: SET_FILTER_CHOOSED_CLEANNING_TYPE,
        payload: cleanningType
    }
}