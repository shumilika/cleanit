import React, { useEffect, useState } from 'react';
import style from '../../css.modules/booking.module.css'
import { Avatar, IconButton } from '@mui/material';
import { dateFormatChanger } from '../../services/formatChanger';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalDeleteCleanBooking from './ModalDeleteCleanBooking';

const BookingCleaners = (props) => {
    
    const dateString = dateFormatChanger(props.date.seconds)
    const [isDateValid, setIsDateValid] = useState(false)
    const [open, setOpen] = useState(false)
    const handleClose = ()=>{
        setOpen(false)
    }

  useEffect(()=>{
    const cardDate = new Date(props.date.seconds * 1000)
    const currentDate = new Date()
        if(cardDate > currentDate){
        setIsDateValid(true)
    }else{
        setIsDateValid(false)
    }
  },[])
 


    return (
        <div>
        <div className={'d-flex justify-content-around p-2'}>
            <div>
                <Avatar alt={props.name} src={props.imageUrl} />
            </div>
            <div>
               <h2> {props.name}</h2>
                <p>{props.cleanType}<br/>
                </p>

            </div>
            <div>
               <p> {dateString + ' '+props.time}<br/>
                   
               </p>
            </div>
           {isDateValid && <IconButton aria-label="delete" onClick={()=>setOpen(true)}>
                                    <DeleteIcon fontSize='small' />
                                  </IconButton>}
        </div>
                    <div id={style.grey_line}></div>
            <ModalDeleteCleanBooking open={open} onClose={handleClose} card={props.card}/>
        </div>
    );
};

export default BookingCleaners;