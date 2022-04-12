
import {faces} from "../utils/constants";
import {FILL_PEOPLE_TABLE} from "../actions/CleaningsActions";

let a = 1;

const initialState =[
    {
        id: a,
        name: 'Albina',
        clean_type: 'deep cleaning expert',
        img: faces.albina_avatar,
        date: '12.04.2022',
        time: '16:00'
    }
    ]



export const cleaningsReducer=(state=initialState,action)=>{
    switch (action.type){
        case FILL_PEOPLE_TABLE:
            return [...state,
                {
                    id:++a,
                name: action.payload.name,
            clean_type: action.payload.clean_type,
            img: faces.albina_avatar,
            date: action.payload.date,
            time: action.payload.time
            }]

        default:
            return state

    }
}