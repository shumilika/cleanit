import React from 'react';
import {useSelector} from "react-redux";
import Person from "./Person";
import style from '../css.modules/booking.module.css';
import { ListItemButton } from '@mui/material';


const Peoples = ({isFilter}) => {

    const {login,cardData,filteredData} = useSelector(state=>state.clean)

    if(login!==true) {
    return (
        <div id={`${style.people_box}`}>
            <p>You should login</p>
        </div>
    );
}
    else {
        return (
            <div id={`${style.people_box}`}>

                {(isFilter?filteredData:cardData).map((card, i)=>
                   <ListItemButton onClick={()=>console.log(card)}>
                   <Person name={card.name} imageUrl={card.photo} 
                    date={card.date} cleanType={card.cleanType} time={card.time}
                                   key={i}/>
                   </ListItemButton>
                )}
            </div>
        );
}
};

export default Peoples;