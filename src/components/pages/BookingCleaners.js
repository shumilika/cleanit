import React, { useEffect, useState } from 'react';
import style from '../../css.modules/booking.module.css'
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText, Tooltip, Typography } from '@mui/material';
import { dateFormatChanger } from '../../services/formatChanger';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalDeleteCleanBooking from './ModalDeleteCleanBooking';

const BookingCleaners = ({card}) => {
    
    const dateString = dateFormatChanger(card.date.seconds)
    const [isDateValid, setIsDateValid] = useState(false)
    const [open, setOpen] = useState(false)
    const handleClose = ()=>{
        setOpen(false)
    }

  useEffect(()=>{
    const cardDate = new Date(card.date.seconds * 1000)
    const currentDate = new Date()
        if(cardDate > currentDate){
        setIsDateValid(true)
    }else{
        setIsDateValid(false)
    }
  },[card])
 


    return (
        <ListItem>
         <ListItemAvatar>
          <Avatar alt={card.name} src={card.photo}  
            sx={{ width: 56, height: 56 }}
          />
        </ListItemAvatar>
        <ListItemText
        sx={{paddingLeft:'30px', paddingTop:'10px'}}
          primary={card.name}
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {dateString + ' '+card.time}
              </Typography>
             <p> {card.cleanType}</p>
            </>
          }
        />
      
       
          {isDateValid && <IconButton aria-label="delete" onClick={()=>setOpen(true)}>
          <Tooltip title='delete'>
                                    <DeleteIcon fontSize='small' />
                                    </Tooltip>
                                  </IconButton>}
       
      
            <ModalDeleteCleanBooking open={open} onClose={handleClose} 
            card={card}
             />
        </ListItem>
    );
};

export default BookingCleaners;