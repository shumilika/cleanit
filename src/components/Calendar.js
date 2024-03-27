import React from 'react';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import style from '../css.modules/booking.module.css'
import { DatePicker } from '@mui/x-date-pickers';

const Calendar = ({value, setValue}) => {

   
  
    return (
        <div className={style.calendarBox}>
           <span className={style.white_span}> Choose available dates:</span>

        <DateCalendar style={{backgroundColor:'#fff', borderRadius:'16px'}}
         value={value} onChange={(newValue) => setValue(newValue.$d)}
        className={style.pickDate}
          disablePast={true} />

          <div style={{margin:'10px 0'}}>
          <DatePicker className={style.pickDateMinSize} value={value} onChange={(newValue) => setValue(newValue.$d)}
           style={{backgroundColor:'#fff', borderRadius:'16px' }} label="Pick date"  disablePast={true} />
          </div>

        </div>


    );
};

export default Calendar;
