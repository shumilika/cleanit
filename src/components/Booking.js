import React, {useState} from 'react';
import Calendar from "./Calendar";
import style from '../css.modules/booking.module.css'
import Peoples from "./Peoples";
import { FormControl, IconButton, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredData } from '../actions/CleaningsActions';
import { convertDateToTimestamp } from '../services/formatChanger';

const Booking = ({bookRef}) => {

    const [cleanType,setCleanType] = useState('');
    const [dateValue, setDateValue] = useState()
    const [isFilter, setIsFilter] = useState(false)
    const {cardData} = useSelector(state=>state.clean)
    const dispatch = useDispatch()
  
    const handleFilterChange = (value) => {
      const filteredData = cardData.filter(item =>
        item.cleanType===value ||
        item.date.seconds===value
      );
  
    dispatch(setFilteredData(filteredData))
    setIsFilter(true)
    };
  

    const setCleanTypeAction=(e)=>{
        setCleanType(e.target.value);
        handleFilterChange(e.target.value)
    }

    const setDateAction=(date)=>{
        setDateValue(date);
        const formatDate = convertDateToTimestamp(date)
        handleFilterChange(formatDate)
    }

    
    const clearFiltersHandle = () =>{
        setIsFilter(false)
        // setDateValue(new Date())
        setCleanType('')

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
               {isFilter? <IconButton aria-label="clear filters"
               onClick={clearFiltersHandle}>
                <ClearIcon />
                    </IconButton>:<></>}
            <Peoples isFilter={isFilter} />
            </div>
        </div>
        </div>
    );
};

export default Booking;