export const FILL_USER_INFO = 'FILL_USER_INFO';

export const fillUserInfoAction = userData=>{
    return{
        type: FILL_USER_INFO,
        payload:userData
    }
}