import React from 'react';
import style from '../css.modules/booking.module.css'
import { Avatar } from '@mui/material';
const Person = (props) => {
    return (
        <div>
        <div className={'d-flex justify-content-around p-2'}>
            <div>
                {/* <img src={props.imageUrl} alt={'avatar'} width={100}/> */}
                <Avatar alt={props.name} src={props.imageUrl} />
            </div>
            <div>
               <h2> {props.name}</h2>
                <p>{props.cleanType}<br/>
                Rating 3.5</p>

            </div>
            <div>
               <p> {props.time}<br/>
                   50dol per service
               </p>
            </div>

        </div>
            <div id={style.grey_line}></div>
        </div>
    );
};

export default Person;