import React, {useState} from 'react';
import Calendar from "../Calendar";
import style from '../../css.modules/booking.module.css'
import Peoples from "./Peoples";
import { FormControl, IconButton, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterChoosedCleanningType, setFilteredData, setIsFilter } from '../../actions/CleaningsActions';
import { convertDateToTimestamp } from '../../services/formatChanger';
 const itemStyle = {
    color: '#F9D859',
    fontWeight:'600'
 }

const Booking = ({bookRef}) => {

    const [cleanType,setCleanType] = useState('');
    const [dateValue, setDateValue] = useState()
    const {cardData,isFilter, cleanningType} = useSelector(state=>state.clean)
    const dispatch = useDispatch()
  
    // const handleFilterChange = (value) => {
    //   const filteredData = cardData.filter(item =>
    //     item.cleanType===value ||
    //     item.date.seconds===value
    //   );
  
    // dispatch(setFilteredData(filteredData))
    // dispatch(setIsFilter(true))
    // };

    const handleFilterChange = (cleanTypeValue, dateValue) => {
        const filteredData = cardData.filter(item => {
          let matchCleanType = true;
          let matchDate = true;
      
          if (cleanTypeValue) {
            matchCleanType = item.cleanType === cleanTypeValue;
          }
      
          if (dateValue) {
            matchDate = item.date.seconds === dateValue;
          }
      
          return matchCleanType && matchDate;
        });
      
        dispatch(setFilteredData(filteredData));
        dispatch(setIsFilter(true));
      };

    const setCleanTypeAction=(e)=>{
        dispatch(setFilterChoosedCleanningType(''))
        setCleanType(e.target.value);
        handleFilterChange(e.target.value,dateValue)
    }

    const setDateAction=(date)=>{
        setDateValue(date);
        const formatDate = convertDateToTimestamp(date)
        handleFilterChange(cleanType,formatDate)
    }
    
    const clearFiltersHandle = () =>{
        dispatch(setIsFilter(false))
        dispatch(setFilterChoosedCleanningType(''))
        setCleanType('')
        setDateValue()

    }

    return (
        <div className={style.bookingBox} ref={bookRef} id={'book'}>
        <div className={`d-flex justify-content-around ${style.booking}`}>
            <div>
            <h1 id={style.book}>Book now</h1>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }} >
            <InputLabel style={{color:'#F9D859', paddingLeft:'15px'}}
             id="demo-simple-select-label">Choose type cleaning</InputLabel>
                <Select 
                sx={{
                    border: "3px solid #F9D859",
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                    "& .MuiSvgIcon-root": {
                            color: "#F9D859",
                        },
                        '& .MuiSelect-select': {
                            color: '#F9D859',
                            fontWeight:'600'
                        },
                        // '&.MuiButtonBase-root-MuiMenuItem-root': { color: "#F9D859", }
                }}
              
                    input={<OutlinedInput label="Choose type cleaning"  />}
                    aria-label="TypesCleaning"
                    label='Choose cleaning type'
                    value={cleanningType||cleanType}
                    labelId="demo-simple-select-label"
                    onChange={setCleanTypeAction}
                >
                    <MenuItem sx={itemStyle}   value={"regularly cleaning expert"} >Regularly Cleaning</MenuItem>
                    <MenuItem sx={itemStyle} value={"deep cleaning expert"}>Deep Cleaning</MenuItem>
                    <MenuItem sx={itemStyle}  value={"office cleaning expert"}>Office Cleaning</MenuItem>
                    <MenuItem  sx={itemStyle} value={"windows cleaning expert"}>Windows Cleaning</MenuItem>
                </Select>
            </FormControl>
               
            <Calendar value={dateValue} setValue={setDateAction}/>
            </div>
            <div>
           
                <span className={style.white_span}>Choose available expert and time:</span>
               {isFilter? <IconButton aria-label="clear filters"
               onClick={clearFiltersHandle}>
                <ClearIcon />
                    </IconButton>:<></>}
            <Peoples/>
            
            </div>
        </div>
        </div>
    );
};

export default Booking;