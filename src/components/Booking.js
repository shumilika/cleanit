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
                <div id={style.select_box}>
            <select aria-label="TypesCleaning">
                <option value="1">Regularly Cleaning</option>
                <option value="2">Deep Cleaning</option>
                <option value="3">Office Cleaning</option>
                <option value="4">Windows Cleaning</option>
            </select>
                </div>
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