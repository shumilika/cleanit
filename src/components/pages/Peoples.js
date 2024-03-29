import React, { useState } from 'react';
import {useSelector} from "react-redux";
import Person from "./Person";
import style from '../../css.modules/booking.module.css';
import { Divider, ListItemButton } from '@mui/material';
import ModalAddCleanCard from './ModalAddCleanCard';
import AlertMessage from '../AlertMessage';


const Peoples = () => {
    
    const {login,cardData,filteredData,isFilter,role} = useSelector(state=>state.clean)
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
                   <div key={i}>
                   <ListItemButton
                    onClick={()=>(login&&role==='employer')?handleClickPerson(card):handleClick()}
                    >
                    <Person name={card.name} imageUrl={card.photo} 
                    date={card.date} cleanType={card.cleanType} time={card.time}
                    />
                   </ListItemButton>
                   <Divider variant='middle'/>
                   </div>
                )}

                {(isFilter&&filteredData.length<=0)&& <p>No matches</p>}
                
             
              <ModalAddCleanCard  open={open}
        onClose={handleClose} card={valueCard}/>

        <AlertMessage open={openSnack} handleClose={handleCloseSnack} severity={'warning'} info={'You need to login as employer!'} />
                
            </div>
        );
}


export default Peoples;