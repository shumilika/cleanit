import { Snackbar, Alert } from '@mui/material';
import React from 'react';

const AlertMessage = ({open, handleClose, severity, info, }) => {
    return (
        <Snackbar
        open={open}
        autoHideDuration={5000} 
        onClose={handleClose}
        anchorOrigin={{  vertical: 'top', horizontal: 'center'  }}
      >   
       <Alert
          onClose={handleClose}
          severity={severity}
        >
        
          {info}
        </Alert>
        </Snackbar>
    );
};

export default AlertMessage;