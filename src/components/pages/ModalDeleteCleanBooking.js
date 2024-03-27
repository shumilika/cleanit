import { Box, Button, Modal } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AlertMessage from '../AlertMessage';
import TextAreaMessage from './TextAreaMessage';
import { deleteBooking,changeStatusCardBase, changeStatusUserCards } from '../../services/addCleanCard';
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

const ModalDeleteCleanBooking = ({open, onClose, card}) => {

    const userUid = useSelector(state=>state.clean.userUid)
    const [openSnack, setOpenSnack] = useState(false)
    const dispatch = useDispatch()
    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenSnack(false)
      }

    const handleDeleteCard = () =>{
      deleteBooking(userUid, card.cardId)
      changeStatusCardBase(card, false)
      changeStatusUserCards(card, false)
      setOpenSnack(true)
      onClose()
      dispatch(setIsUpdateCardsAction(true))

    }
 
  
    return (
        <div>

         <Modal
        open={open}
        onClose={onClose}
      >
        <Box sx={style}>
        <p>Are you sure you want to cancel the cleaning? </p>
      
        <TextAreaMessage/>
           <div>
           <Button onClick={handleDeleteCard}>Submit</Button>
            <Button onClick={onClose}>Cancel</Button>
           </div>
        </Box>
        
      </Modal>
      <AlertMessage open={openSnack} handleClose={handleCloseSnack} 
        severity={'success'} info={`${card.name} will receive your message`} 

      />
        </div>
                
        
    );
};

export default ModalDeleteCleanBooking;