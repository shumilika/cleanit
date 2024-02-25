export const FILL_USER_INFO = 'FILL_USER_INFO';
export const SET_IS_UPDATE_CARDS = 'SET_IS_UPDATE_CARDS'

export const fillUserInfoAction = userData=>{
    return{
        type: FILL_USER_INFO,
        payload:userData
    }
}

export const setIsUpdateCardsAction = boolean=>{
    return{
        type: SET_IS_UPDATE_CARDS,
        payload:boolean
    }
}

