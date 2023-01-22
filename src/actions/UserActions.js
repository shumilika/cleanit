export const FILL_USER_INFO = 'FILL_USER_INFO';
export const GET_USER_PHOTO_URL = 'GET_USER_PHOTO_URL';

export const fillUserInfoAction = userData=>{
    return{
        type: FILL_USER_INFO,
        payload:userData
    }
}
export const getUserPhotoUrlAction =photoUrl=>{
    return {
        type: GET_USER_PHOTO_URL,
        payload:photoUrl
    }
}