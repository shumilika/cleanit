import React, {useState} from 'react';
import Calendar from "./Calendar";
import style from '../css.modules/booking.module.css'
import Peoples from "./Peoples";
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';

const Booking = ({bookRef}) => {

    const [cleanType,setCleanType] = useState('');
    const [dateValue, setDateValue] = useState()

    const setCleanTypeAction=(e)=>{
        setCleanType(e.target.value);
    }

    const setDateAction=(date)=>{
        setDateValue(date);
        console.log(date)
    }

    const handleChangeFilter =(e)=>{
        setCleanType(e.target.value);
        //filterCardData by cleanType
    }

    return (
        <div className={style.bookingBox} ref={bookRef} id={'book'}>
        <div className={`d-flex justify-content-around ${style.booking}`}>
            <div>
            <h1 id={style.book}>Book now</h1>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
            <InputLabel style={{color:'#F9D859'}} id="demo-simple-select-label">Choose type cleaning</InputLabel>
                <Select 
                    input={<OutlinedInput label="Choose type cleaning" />}
                    aria-label="TypesCleaning"
                    label='Choose cleaning type'
                    value={cleanType}
                    labelId="demo-simple-select-label"
                    onChange={setCleanTypeAction}
                >
              
                    <MenuItem   value={"regularly cleaning expert"} >Regularly Cleaning</MenuItem>
                    <MenuItem  value={"deep cleaning expert"}>Deep Cleaning</MenuItem>
                    <MenuItem  value={"office cleaning expert"}>Office Cleaning</MenuItem>
                    <MenuItem  value={"windows cleaning expert"}>Windows Cleaning</MenuItem>
                </Select>
            </FormControl>
               
            <Calendar value={dateValue} setValue={setDateAction}/>
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