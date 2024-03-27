import React, { useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import style from "../../css.modules/booking.module.css";
import {addCard, addCardMainBase, updateCardInCardBase, updateCardInUserCards} from "../../services/addCleanCard";
import {useDispatch, useSelector} from "react-redux";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { styled } from '@mui/material/styles';
import { fb } from '../../config/fireBaseConfig';
import AlertMessage from '../AlertMessage';
import Spinner from '../Spinner';
import dayjs from 'dayjs';
import { convertStringTimeToDateTime, dateFormatChanger } from '../../services/formatChanger';
import { setIsUpdateCardsAction } from '../../actions/UserActions';

const UpdatePositionCleaner = (props) => {
    const {userUid} = useSelector(state=>state.clean);
    const [cleanType, setCleanType] = useState(props.card.cleanType);
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(props.card.time);
    const [isLoad, setIsLoad] = useState(false)
    const [severity, setSeverity] = useState()
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const [openSnack, setOpenSnack] = useState(false);
    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenSnack(false);
      };
    

    const handleChangeCleanType = e=>{
        setCleanType(e.target.value);
    }

    const handleChangeDate = date=>{
        setDate(date.$d);
    }
    
    const handleChangeTime = time=>{
        const dateString = time.$d;
        const date = new Date(dateString);
        const options = {
          hour: '2-digit',
          minute: '2-digit'
        };
        const formattedTime = new Intl.DateTimeFormat('en-US', options).format(date);
        setTime(formattedTime)
    }

    const handleClickAction = () =>{
        setIsLoad(true)
  
        updateCardInUserCards(userUid,props.card.cardId,date,time,cleanType)
        updateCardInCardBase(props.card.cardId,date, time, cleanType)
        .then(()=>{
           
            setMessage('Position updated successfuly!')
            setSeverity('success')
            setIsLoad(false)
            props.handleClose();
            setOpenSnack(true)
            dispatch(setIsUpdateCardsAction(true))
        })
        .catch(()=>{
            setMessage('Please try again')
            setSeverity('error')
            setIsLoad(false)
            setOpenSnack(true)
        })

   
}

    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose} maxWidth={"lg"}>
                <DialogTitle>Change card</DialogTitle>
                
                <DialogContent>
    
           
            <div>
        
                <DatePicker
                    label='Pick date'
                    value={dayjs(dateFormatChanger(props.card.date.seconds))}
                    onChange={e=>handleChangeDate(e)}
                />
              <br />
              <br />

                <TimePicker
                    label='Pick time'
                    value={dayjs(convertStringTimeToDateTime(props.card.time))}
                    onChange={e=>handleChangeTime(e)}
                />
                <br />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
            <InputLabel id="demo-simple-select-label">Choose cleaning type</InputLabel>
                <Select 
                    aria-label="TypesCleaning"
                    label='Choose cleaning type'
                    value={cleanType}
                    labelId="demo-simple-select-label"
                    onChange={handleChangeCleanType}
                >
              
                    <MenuItem  className={`${style.types}`} value={"regularly cleaning expert"} >Regularly Cleaning</MenuItem>
                    <MenuItem className={`${style.types}`} value={"deep cleaning expert"}>Deep Cleaning</MenuItem>
                    <MenuItem className={`${style.types}`} value={"office cleaning expert"}>Office Cleaning</MenuItem>
                    <MenuItem className={`${style.types}`} value={"windows cleaning expert"}>Windows Cleaning</MenuItem>
                </Select>
            </FormControl>
            </div>
            </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose}>Close</Button>
                    <Button onClick={handleClickAction}>Update</Button>
                </DialogActions>
                <Spinner visible={isLoad}/>
            </Dialog>
            
                <AlertMessage open={openSnack} handleClose={handleCloseSnack} severity={severity} info={message} />
        </div>
    );
};

export default UpdatePositionCleaner;