

export const FILL_PEOPLE_TABLE = 'FILL_PEOPLE_TABLE';


export const fillPeopleTableAction=(name, date, time,clean_type)=>{
    return {
        type: FILL_PEOPLE_TABLE,
        payload: {name,date, time,clean_type}
    }
}

