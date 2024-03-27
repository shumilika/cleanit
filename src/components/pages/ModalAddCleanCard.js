import { Box, Button, Modal } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBooking, changeStatusCardBase, changeStatusUserCards, getCleanCard } from '../../services/addCleanCard';
import AlertMessage from '../AlertMessage';
import { fillCardDataAction } from '../../actions/CleaningsActions';
import { setIsUpdateCardsAction } from '../../actions/UserActions';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #fff',
    borderRadius:'5px',
    boxShadow: 24,
    p: 4,
  };

const ModalAddCleanCard = ({open, onClose, card}) => {

    const userUid = useSelector(state=>state.clean.userUid)
    const dispatch = useDispatch()
    const [openSnack, setOpenSnack] = useState(false)
    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
          return
        }
    
        setOpenSnack(false)
      }

    const handleAddCard = () =>{
      addBooking(userUid, card)
      changeStatusCardBase(card, true)
      changeStatusUserCards(card, true)
  
      getCleanCard().then(data=>{
        const filteredData = data.filter(item=>item.status===false)
        dispatch(fillCardDataAction(filteredData))
    })
    dispatch(setIsUpdateCardsAction(true))
      setOpenSnack(true)
      onClose()
     

    }
  
    return (
        <div>

         <Modal
        open={open}
        onClose={onClose}
      >
        <Box sx={style}>
        <p>You choosed {card.name}. Are you sure?</p>
            <Button onClick={handleAddCard}>Yes</Button>
            <Button onClick={onClose}>No</Button>
        </Box>
        
      </Modal>
      <AlertMessage open={openSnack} handleClose={handleCloseSnack} severity={'success'} info={'Now you have the cleaner:)'} />
        </div>
                
        
    );
};

export default ModalAddCleanCard;