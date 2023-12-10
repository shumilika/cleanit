import React, { useEffect, useState } from 'react';
import { registration} from "../../services/authService";
import {useDispatch, useSelector} from "react-redux";
import { styled } from '@mui/material/styles';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {
    setCurrentUserEmailAction,
    setCurrentUserRoleAction,
    turnOnLogOutPageAction
} from "../../actions/CleaningsActions";

import {addAvatar, addRole} from "../../services/infoService";
import {storage} from "../../config/fireBaseConfig";
import {getUserPhotoUrlAction} from "../../actions/UserActions";
import { Box, Button, FormControl, FormLabel, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const Registration = (props) => {

    const [password, setPassword] = useState('');
    const {role,email} = useSelector(state=>state.clean);
    const {photoUrl} = useSelector(state=>state.user);
    const dispatch = useDispatch();
    const [name,setName] = useState('');
    const [image, setImage] = useState('');
    const [isPhotoPicked, setIsPhotoPicked] = useState(false);
    const [newRole, setNewRole] = useState('')

    const setPhotoUserAction=(e)=>{
        setImage(e.target.files[0]);
        setIsPhotoPicked(true);
    }

    const handleUpload= ()=>{
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            'state_changed',
            snapshot => {},
            error =>{
                console.log(error);
            },
            ()=>{
                storage
                    .ref('images')
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        dispatch(getUserPhotoUrlAction(url))
                    });
            }
        );
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

  
     const handleClickRegistration = () => {
        registration(email, password);
        // console.log(role)
         // await handleUpload();
        addRole(role, name, email);
         addAvatar(photoUrl,email)
        props.handleClose();
        dispatch(turnOnLogOutPageAction(true))

    }
 
    const setRoleAction=(e)=>{
        setNewRole(e.target.value)
        dispatch(setCurrentUserRoleAction(e.target.value))
    }
    useEffect(() => {
        if (isPhotoPicked) handleUpload();
    },[]);

    return (
        <div>
            <h4>Registration</h4>

           <div>
           <Box >
                <TextField id="name" label="Name" variant="standard" value={name} onChange={e=>setName(e.target.value)} />
               <br />
                <TextField id="email" label="Email" variant="standard" value={email} onChange={e=>dispatch(setCurrentUserEmailAction(e.target.value))} />
               <br />
                <TextField id="password" label="Password" variant="standard" value={password} onChange={e=>setPassword(e.target.value)} />
            </Box>  
            <br />     
            <Button style={{marginRight:'10px'}} component="label" variant="contained" onChange={setPhotoUserAction}
       // startIcon={<CloudUploadIcon />}
       >
      Upload photo
      <VisuallyHiddenInput type="file"  />
    </Button>
    {isPhotoPicked && <FormLabel>{image.name}</FormLabel>}

    <br />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
            <InputLabel id="demo-simple-select-label">Choose role</InputLabel>
                <Select 
                 aria-label="TypesCleaning"
                 label='Choose cleaning type'
                 value={newRole}
                 labelId="demo-simple-select-label"
                 onChange={setRoleAction}>
                    <MenuItem   value={"employer"} >employer</MenuItem>
                    <MenuItem value={"cleaner"}>employee</MenuItem>
                </Select>
                </FormControl>
           </div>
        </div>
    );
};

export default Registration;