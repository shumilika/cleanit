import React, {useEffect, useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import style from '../../css.modules/sign.module.css';
import Registration from './Registration';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUserRoleAction, turnOnLogOutPageAction } from '../../actions/CleaningsActions';
import { login, registration} from "../../services/authService";
import {addAvatar, addRole, getUserInfo} from "../../services/infoService";
import SignIn from './SignIn';
import { storage } from '../../config/fireBaseConfig';
import { fillUserInfoAction, getUserPhotoUrlAction } from '../../actions/UserActions';




const SignUp = (props) => {
   const dispatch = useDispatch()
   const {photoUrl} = useSelector(state=>state.user);
   const {email} = useSelector(state=>state.clean);
   const [password, setPassword] = useState('');
   const [name,setName] = useState('');
   const [role, setRole] = useState('')
   const [isLogIn, setIsLogIn] = useState(false)
   const [image, setImage] = useState('')
  

   const handleSetPassword = (value)=>{
    setPassword(value)
   }

   const handleSetName = (value)=>{
    setName(value)
   }

   const handleSetImage = (value)=>{
    setImage(value)
   }

   const handleSetRole = (value)=>{
    dispatch(setCurrentUserRoleAction(value))
    setRole(value)
   }
    const handleClickLogin =()=>{
        login(email,password);
        getUserInfo(email).then(data=>{
            dispatch(fillUserInfoAction(data))
            dispatch(setCurrentUserRoleAction(data.user[0].role))
       }).catch(e=>{
           
       })
        props.handleClose();
       dispatch(turnOnLogOutPageAction(true))
    }

   

    const handleCloseAction=()=>{
        props.handleClose();
    }

    const handleUpload= ()=>{
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            'state_changed',
            snapshot => {},
            error =>{
         
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

    const handleClickRegistration = () => {
        if(image) handleUpload()
        registration(email, password);
        props.handleClose();
        dispatch(turnOnLogOutPageAction(true))
    }

      useEffect(() => {
        addRole(role, name, email,photoUrl);

    },[photoUrl]);
        return (
        <div className={'d-flex'}>

            <Dialog open={props.open} onClose={props.handleClose} maxWidth={"lg"}>
                
                <DialogContent>
                    {/* <DialogContentText>
                        Fill all fields
                    </DialogContentText> */}
                   
                    {!isLogIn && <Registration password={password} role={role}
                    setPassword={handleSetPassword} name={name}
                    setName={handleSetName} setRole={handleSetRole}
                    image={image} setImage={handleSetImage}
                    />}

                    {isLogIn && <SignIn password={password} setPassword={handleSetPassword}/>}
                    <br />
                  {!isLogIn && 
                   <p> Do you already have registration? Please <Button
                   variant='text'
                   size='small'
                    onClick={e=>setIsLogIn(true)}>log in</Button></p>}
                   {isLogIn && 
                   <p>If you dont have a registration,  please <Button    variant='text'
                   size='small' onClick={e=>setIsLogIn(false)}>sign up</Button></p>} 
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseAction}>Close</Button>
                   
                    {!isLogIn&& <Button onClick={handleClickRegistration}>Sign Up</Button>}
                     {isLogIn &&<Button onClick={handleClickLogin}>Log In</Button>}
                </DialogActions>
            </Dialog>


        </div>
    );
};


export default SignUp