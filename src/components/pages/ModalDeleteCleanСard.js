import { Box, Button, Modal } from '@mui/material';
import React, { useState } from 'react';
import AlertMessage from '../AlertMessage';
import { deleteCleanCardUsersBase, deleteCleanCardCleanningBase } from '../../services/addCleanCard';
import { useDispatch } from 'react-redux';
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

const ModalDeleteCleanСard = ({open, onClose, card}) => {

    const [openSnack, setOpenSnack] = useState(false)
    const dispatch = useDispatch()
    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenSnack(false)
      }

    const handleDeleteCard = () =>{
      deleteCleanCardUsersBase(card.userID, card.cardId)
      deleteCleanCardCleanningBase(card.cardId)
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
        <p>Are you sure you want to delete this card? </p>
           <div>
           <Button onClick={handleDeleteCard}>Submit</Button>
            <Button onClick={onClose}>Cancel</Button>
           </div>
        </Box>
        
      </Modal>
      <AlertMessage open={openSnack} handleClose={handleCloseSnack} 
        severity={'success'} info={`card successfuly deleted!`} 

      />
        </div>
                
        
    );
};

export default ModalDeleteCleanСard;