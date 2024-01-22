import React, {  useState } from 'react';

import {useDispatch, useSelector} from "react-redux";
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {
    setCurrentUserEmailAction,
} from "../../actions/CleaningsActions";


import { Box, Button, FormLabel, TextField } from '@mui/material';

const Registration = ({password, setPassword, name, image, setImage,
    setName}) => {

    
    const {email} = useSelector(state=>state.clean);
    const dispatch = useDispatch();
    const [isPhotoPicked, setIsPhotoPicked] = useState(false);
    

    const setPhotoUserAction=(e)=>{
        setImage(e.target.files[0]);
        setIsPhotoPicked(true);
    }

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });
 

    return (
        <div>
            <h4>Registration</h4>
            <h6>*only for employers</h6>
           <div>
           <Box >
                <TextField id="name" label="Name" variant="standard" value={name} onChange={e=>setName(e.target.value)} />
               <br />
                <TextField id="email" label="Email" variant="standard" value={email} onChange={e=>dispatch(setCurrentUserEmailAction(e.target.value))} />
               <br />
                <TextField iid="outlined-password-input"  label="Password"  type="password"
          autoComplete="current-password" variant="standard" value={password} onChange={e=>setPassword(e.target.value)} />
            </Box>  
            <br />     
            <Button style={{marginRight:'10px'}} component="label" variant="contained" onChange={setPhotoUserAction}
                startIcon={<CloudUploadIcon />}
            >
            Upload photo
            <VisuallyHiddenInput type="file"  />
            </Button>
            {isPhotoPicked && <FormLabel>{image.name}</FormLabel>}

           </div>
           
        </div>
    );
};

export default Registration;