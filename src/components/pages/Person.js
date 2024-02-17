import React from 'react';
import style from '../../css.modules/booking.module.css'
import { Avatar, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material';
import { dateFormatChanger } from '../../services/formatChanger';
const Person = (props) => {
    const dateString = dateFormatChanger(props.date.seconds);
    return (
    
   <>
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
      
      
   </>
    );
};

export default Person;