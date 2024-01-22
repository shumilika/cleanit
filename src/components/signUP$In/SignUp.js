import React, {useEffect, useState} from 'react';
import {
    Alert,
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
import { setCurrentUserRoleAction, setCurrentUserUID, turnOnLogOutPageAction } from '../../actions/CleaningsActions';
import { getUser, login, registration} from "../../services/authService";
import {addRole, getUserInfo} from "../../services/infoService";
import SignIn from './SignIn';
import { fb, storage } from '../../config/fireBaseConfig';
import { fillUserInfoAction, getUserPhotoUrlAction } from '../../actions/UserActions';





const SignUp = (props) => {
   const dispatch = useDispatch()
   const {photoUrl} = useSelector(state=>state.user);
   const {email} = useSelector(state=>state.clean);
   const [password, setPassword] = useState('');
   const [name,setName] = useState('');
   const [isLogIn, setIsLogIn] = useState(true)
   const [image, setImage] = useState('')
   const [errorReg, setErrorReg] = useState(null)
   
   const handleSetPassword = (value)=>{
    setPassword(value)
   }

   const handleSetName = (value)=>{
    setName(value)
   }

   const handleSetImage = (value)=>{
    setImage(value)
   }

    const handleClickLogin =()=>{
        login(email,password);
       
        setTimeout(()=>{

        dispatch(setCurrentUserUID(fb.auth().currentUser.uid))
        getUserInfo(fb.auth().currentUser.uid).then(data=>{
            
            dispatch(fillUserInfoAction(data))
            dispatch(setCurrentUserRoleAction(data.role))
        }).catch(error=>{
           setErrorReg(error)
        })
        },3000)    
       
        props.handleClose();
        // if(errorReg===null)
         dispatch(turnOnLogOutPageAction(true))
        // else{dispatch(turnOnLogOutPageAction(false))}
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

    const handleClickRegistration = async () => {
    
        if(image) await handleUpload()
      
       setTimeout(()=>{
         fb.auth().createUserWithEmailAndPassword(email,password)
        .then(userCredits=>
            {console.log(userCredits.user)
                addRole('employer', name, email,photoUrl,userCredits.user.uid)
                dispatch(setCurrentUserUID(userCredits.user.uid))
                dispatch(setCurrentUserRoleAction('employer'))
            })
            .then(()=>{
                props.handleClose();
                dispatch(turnOnLogOutPageAction(true))
            })
       },5000)
    }
       
   

        return (
        <div className={'d-flex'}>

            <Dialog open={props.open} onClose={props.handleClose} maxWidth={"lg"}>
                <DialogContent>
                   
                   
                    {!isLogIn && <Registration password={password} 
                    setPassword={handleSetPassword} name={name}
                    setName={handleSetName}
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