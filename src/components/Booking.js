import React from 'react';
import Calendar from "./Calendar";
import style from '../css.modules/booking.module.css'
import Peoples from "./Peoples";

const Booking = () => {
    return (
        <div className={style.bookingBox} id={'book'}>
        <div className={`d-flex justify-content-around ${style.booking}`}>
            <div>
            <h1 id={style.book}>Book now</h1>
            <select className={`form-select ${style.typesCleaning}`} aria-label="TypesCleaning">
                <option  className={`${style.types}`} value="1">Regularly Cleaning</option>
                <option className={`${style.types}`} value="2">Deep Cleaning</option>
                <option className={`${style.types}`} value="3">Office Cleaning</option>
                <option className={`${style.types}`} value="4">Windows Cleaning</option>
            </select>
            <Calendar/>
            </div>
            <div>
                <span>Choose available expert and time:</span>
            <Peoples/>
            </div>
        </div>
        </div>
    );
};

export default Booking;