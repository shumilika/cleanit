import React from 'react';
import Calendar from "./Calendar";
import style from '../css.modules/booking.module.css'

const Booking = () => {
    return (
        <div className={style.bookingBox}>
        <div className={style.booking}>
            <h1>Book now</h1>
            <select className={`form-select ${style.typesCleaning}`} aria-label="TypesCleaning">
                <option  className={`${style.types}`} selected value="1">Regularly Cleaning</option>
                <option className={`${style.types}`} value="2">Deep Cleaning</option>
                <option className={`${style.types}`} value="3">Office Cleaning</option>
                <option className={`${style.types}`} value="4">Windows Cleaning</option>
            </select>
            <Calendar/>
        </div>
        </div>
    );
};

export default Booking;