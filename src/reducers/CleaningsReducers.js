
import {faces} from "../utils/constants";
import {FILL_DATE, FILL_NAME, FILL_TIME} from "../actions/CleaningsActions";

const initialState =
    {
        // id: 1,
        name: 'Albina',
        clean_type: 'deep cleaning expert',
        img: faces.albina_avatar,
        date: '12.04.2022',
        time: '16:00'

    }

export const cleaningsReducer=(state=initialState,action)=>{
    switch (action.type){
        // case FILL_PEOPLE_TABLE:
        //     return [...state,
        //         {
        //             // id:state.id+1,
        //         name: action.payload.name,
        //     // clean_type: action.payload.clean_type,
        //     img: faces.albina_avatar,
        //     date: action.payload.date,
        //     time: action.payload.time
        //     }]
        case FILL_NAME:
            return {
                ...state,
                name: action.payload
            }
        case FILL_DATE:
            return {...state,
                date: action.payload
                }
        case FILL_TIME:
            return {...state,
                time: action.payload
                }
        default:
            return state

    }
}