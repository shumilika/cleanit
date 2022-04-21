import React from 'react';
import {useSelector} from "react-redux";
import Person from "./Person";
import style from '../css.modules/booking.module.css';


const Peoples = () => {

    const {login,cardData} = useSelector(state=>state)

    if(login===true) {
    return (
        <div id={`${style.people_box}`}>
                 {cardData.cleanCards.map((card, i)=>
                  <Person name={card.name} date={card.date} cleanType={card.cleanType} time={card.time} key={i}/>
                )}
        </div>
    );
}
    else {
        return (
            <div id={`${style.people_box}`}>
                <p>You should login</p>
            </div>
        );
}
};

export default Peoples;