import { Box, Button, Modal } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { addBooking, changeStatusCardBase, changeStatusUserCards } from '../services/addCleanCard';

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

    const handleAddCard = () =>{
      addBooking(userUid, card)
      changeStatusCardBase(card)
      changeStatusUserCards(card)
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
                
        </div>
    );
};

export default ModalAddCleanCard;