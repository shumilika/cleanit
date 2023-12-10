import React, {useState} from 'react';
import Calendar from "./Calendar";
import style from '../css.modules/booking.module.css'
import Peoples from "./Peoples";

const Booking = () => {

    // const [choosingCleanType,setChoosingCleanType] = useState('');

    // const setCleanTypeAction=(e)=>{
    //     setChoosingCleanType(e.target.value);
    // }

    return (
        <div className={style.bookingBox} id={'book'}>
        <div className={`d-flex justify-content-around ${style.booking}`}>
            <div>
            <h1 id={style.book}>Book now</h1>
                <div id={style.select_box}>
            <select aria-label="TypesCleaning" >
                <option className=''>Choose type cleaning</option>
                <option value="regularly cleaning expert" >Regularly Cleaning</option>
                <option value="deep cleaning expert">Deep Cleaning</option>
                <option value="office cleaning expert">Office Cleaning</option>
                <option value="windows cleaning expert">Windows Cleaning</option>
            </select>
                </div>
            <Calendar/>
            </div>
            <div>
                <span>Choose available expert and time:</span>
            <Peoples />
            </div>
        </div>
        </div>
    );
};

export default Booking;