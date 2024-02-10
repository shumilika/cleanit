import React from 'react';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import style from '../css.modules/booking.module.css'

const Calendar = ({value, setValue}) => {

   
  
    return (
        <div>
           <span className={style.white_span}> Choose available dates:</span>

        <DateCalendar style={{backgroundColor:'#fff', borderRadius:'16px'}}
         value={value} onChange={(newValue) => setValue(newValue.$d)}
         
          disablePast={true} />

        </div>


    );
};

export default Calendar;
