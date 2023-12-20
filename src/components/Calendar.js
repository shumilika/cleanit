import React, {useState} from 'react';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
const Calendar = () => {

    const [value, setValue] = useState();
  
    return (
        <div>
           <span> Choose available dates:</span>

        <DateCalendar style={{backgroundColor:'#fff', borderRadius:'16px'}}
         value={value} onChange={(newValue) => setValue(newValue)} />

        </div>


    );
};

export default Calendar;
