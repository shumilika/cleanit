

export const FILL_PEOPLE_TABLE = 'FILL_PEOPLE_TABLE';
export const FILL_NAME = 'FILL_NAME';
export const FILL_DATE = 'FILL_DATE';
export const FILL_TIME = 'FILL_TIME';


export const fillPeopleTableAction=(name, date, time)=>{
    return {
        type: FILL_PEOPLE_TABLE,
        payload: name,
        // clean_type,
        date, time
    }
}

export const fillNameAction = name =>{
    return {
        type: FILL_NAME,
        payload: name
    }
}

export const fillDateAction = date =>{
    return {
        type: FILL_DATE,
        payload: date
    }
}

export const fillTimeAction = time =>{
    return {
        type: FILL_TIME,
        payload: time
    }
}