import React, { useState } from 'react';
import {useSelector} from "react-redux";
import Person from "./Person";
import style from '../css.modules/booking.module.css';
import { ListItemButton } from '@mui/material';
import ModalAddCleanCard from './ModalAddCleanCard';


const Peoples = ({isFilter }) => {

    const {login,cardData,filteredData} = useSelector(state=>state.clean)
    const [valueCard, setValueCard] = useState({})
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const handleClickPerson = (card)=>{
        setValueCard(card)
        handleOpen()
    }

    if(login!==true) {
    return (
        <div id={`${style.people_box}`}>
            <p>You should login</p>
        </div>
    );
}
    else {
        return (
            <div id={`${style.people_box}`}>

                {(isFilter?filteredData:cardData).map((card, i)=>
                   <ListItemButton onClick={()=>handleClickPerson(card)} key={i}>
                   <Person name={card.name} imageUrl={card.photo} 
                    date={card.date} cleanType={card.cleanType} time={card.time}
                                   key={i}/>
                   </ListItemButton>
                )}
                
                <ModalAddCleanCard  open={open}
        onClose={handleClose} card={valueCard}/>
                
            </div>
        );
}
};

export default Peoples;