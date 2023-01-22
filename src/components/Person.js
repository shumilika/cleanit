import React from 'react';
import style from '../css.modules/booking.module.css'
const Person = (props) => {
    return (
        <div>
        <div className={'d-flex justify-content-around p-2'}>
            <div>
                <img src={props.image} alt={'avatar'}/>
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