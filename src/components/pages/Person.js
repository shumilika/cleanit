import React from 'react';
import { Avatar, ListItemAvatar, ListItemText, Typography } from '@mui/material';
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
             <Typography
                sx={{ display:'block' }}
                component="span"
                
              > {props.cleanType}</Typography>
            </>
          }
        />
      
      
   </>
    );
};

export default Person;