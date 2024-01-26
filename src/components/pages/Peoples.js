import React, { useState } from 'react';
import {useSelector} from "react-redux";
import Person from "./Person";
import style from '../../css.modules/booking.module.css';
import { Alert, AlertTitle, ListItemButton, Snackbar } from '@mui/material';
import ModalAddCleanCard from './ModalAddCleanCard';


const Peoples = () => {
    
    const {login,cardData,filteredData,isFilter} = useSelector(state=>state.clean)
    const [valueCard, setValueCard] = useState({})
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [openSnack, setOpenSnack] = useState(false);
    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenSnack(false);
      };
    


    const handleClick = () => {
        setOpenSnack(true);
      };
    
      
    const handleClickPerson = (card)=>{
        setValueCard(card)
        handleOpen()
    }


        return (
            <div id={`${style.people_box}`}>

                {(isFilter?filteredData:cardData).map((card, i)=>
                   <ListItemButton onClick={()=>login?handleClickPerson(card):handleClick()} key={i}>
                   <Person name={card.name} imageUrl={card.photo} 
                    date={card.date} cleanType={card.cleanType} time={card.time}
                                   key={i}/>
                   </ListItemButton>
                )}
                
             
              <ModalAddCleanCard  open={open}
        onClose={handleClose} card={valueCard}/>
      <Snackbar
        open={openSnack}
        autoHideDuration={5000} 
        onClose={handleCloseSnack}
        anchorOrigin={{  vertical: 'top', horizontal: 'center'  }}
      >   
       <Alert
          onClose={handleCloseSnack}
          severity="warning"
        >
         {/* <AlertTitle>Warning</AlertTitle> */}
          You need to login first!
        </Alert>
        </Snackbar>
                
            </div>
        );
}


export default Peoples;