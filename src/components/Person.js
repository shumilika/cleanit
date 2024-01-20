import React from 'react';
import style from '../css.modules/booking.module.css'
import { Avatar } from '@mui/material';
import { dateFormatChanger } from '../services/formatChanger';
const Person = (props) => {
    const dateString = dateFormatChanger(props.date.seconds);
    return (
        <div>
        <div className={'d-flex justify-content-around p-2'}>
            <div>
                <Avatar alt={props.name} src={props.imageUrl} />
            </div>
            <div>
               <h2> {props.name}</h2>
                <p>{props.cleanType}<br/>
                Rating 3.5</p>

            </div>
            <div>
               <p> {dateString + ' '+props.time}<br/>
                   50dol per service
               </p>
            </div>

        </div>
            <div id={style.grey_line}></div>
        </div>
    );
};

export default Person;