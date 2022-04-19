import React from 'react';
import {useSelector} from "react-redux";
import Person from "./Person";
import style from '../css.modules/booking.module.css';

const Peoples = () => {
    const person = useSelector(state=>state)

    return (
        <div id={`${style.people_box}`}>
            {person.map(({name,date,id, img, clean_type,time})=>(
                <Person name={name} date={date} id={id} image={img} cleanType={clean_type} time={time}/>
            ))}


        </div>
    );
};

export default Peoples;