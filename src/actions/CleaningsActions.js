import {pages} from "../utils/constants";

export const CHANGE_CLEANING_PAGE = 'CHANGE_CLEANING_PAGE';

export const changeCleaningPageAction=pageName=>{
    return {
        type: CHANGE_CLEANING_PAGE,
        payload: pageName
    }
}

