import React, { useEffect, useState } from 'react';
import style from '../../css.modules/booking.module.css'
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemButton, ListItemText, Tooltip, Typography } from '@mui/material';
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
        <ListItem>
         <ListItemAvatar>
          <Avatar alt={props.name} src={props.imageUrl}  
            sx={{ width: 56, height: 56 }}
          />
        </ListItemAvatar>
        <ListItemText
        sx={{paddingLeft:'30px', paddingTop:'10px'}}
          primary={props.name}
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {dateString + ' '+props.time}
              </Typography>
             <p> {props.cleanType}</p>
            </>
          }
        />
      
       
          {isDateValid && <IconButton aria-label="delete" onClick={()=>setOpen(true)}>
          <Tooltip title='delete'>
                                    <DeleteIcon fontSize='small' />
                                    </Tooltip>
                                  </IconButton>}
       
      
            <ModalDeleteCleanBooking open={open} onClose={handleClose} card={props.card} handleUpdatePeopleCards={props.handleUpdatePeopleCards}/>
        </ListItem>
    );
};

export default BookingCleaners;