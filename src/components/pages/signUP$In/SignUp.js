import React, { useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
} from "@mui/material";
import style from '../../../css.modules/sign.module.css';
import Registration from './Registration';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUserEmailAction, setCurrentUserRoleAction, setCurrentUserUID, turnOnLogOutPageAction } from '../../../actions/CleaningsActions';
// import { login } from "../../../services/authService";
import {addRole, getUserInfo} from "../../../services/infoService";
import SignIn from './SignIn';
import { fb, storage } from '../../../config/fireBaseConfig';
import { fillUserInfoAction, getUserPhotoUrlAction } from '../../../actions/UserActions';
import Spinner from '../../Spinner';
import AlertMessage from '../../AlertMessage';


const SignUp = (props) => {
   const dispatch = useDispatch()
   const {photoUrl} = useSelector(state=>state.user);
   const {email,userUid} = useSelector(state=>state.clean);
   const [password, setPassword] = useState('');
   const [name,setName] = useState('');
   const [isLogIn, setIsLogIn] = useState(true)
   const [image, setImage] = useState('')
   const [errorReg, setErrorReg] = useState(null)
   const [isLoad, setIsLoad] = useState(false)
   const [severity, setSeverity] = useState()
   const [message, setMessage] = useState('')

   const [openSnack, setOpenSnack] = useState(false);
    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenSnack(false);
      };


   const handleSetPassword = (value)=>{
    setPassword(value)
   }

   const handleSetName = (value)=>{
    setName(value)
   }

   const handleSetImage = (value)=>{
    setImage(value)
   }

   const  login=()=>{
    setIsLoad(true)
    fb.auth().signInWithEmailAndPassword(email,password)
     .then(()=>{
        dispatch(turnOnLogOutPageAction(true))
     })
    .catch(error=>{
        setIsLoad(false)
        setErrorReg(error)
       setSeverity('error')
       setMessage('Please try again')
       setOpenSnack(true)
       
    })

}

    const handleClickLogin =()=>{
        login()
        if(!errorReg)
            setTimeout(()=>{

                dispatch(setCurrentUserUID(fb.auth().currentUser.uid))
                getUserInfo(fb.auth().currentUser.uid).then(data=>{
                    
                    dispatch(fillUserInfoAction(data))
                    dispatch(setCurrentUserRoleAction(data.role))
                    
                    setIsLoad(false)
                   handleCloseAction()
            
                })
            },3000)  
        
    }

    const handleCloseAction=()=>{
        props.handleClose()
        setPassword('')
        setName('')
        setImage('')
        dispatch(setCurrentUserEmailAction(''))
        setIsLogIn(true)
        setTimeout(()=>{
            handleCloseSnack()
        },1000)
        // setSeverity()
        // setMessage('')
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

    const handleClickRegistration =  () => {
        setIsLoad(true)
        if(image)  handleUpload()
      
        setTimeout(()=>{
            fb.auth().createUserWithEmailAndPassword(email,password)
        .then(userCredits=>
            {
                setSeverity('success')
                setMessage('success registration')
                addRole('employer', name, email,photoUrl,userCredits.user.uid)
                dispatch(setCurrentUserUID(userCredits.user.uid))
                dispatch(setCurrentUserRoleAction('employer'))
                                
               setOpenSnack(true)
                // props.handleClose();
                // dispatch(turnOnLogOutPageAction(true))
            })
            .then(()=>{

                console.log('login')
                getUserInfo(userUid).then(data=>{
                    console.log(data)
                    dispatch(fillUserInfoAction(data))                    
                    setIsLoad(false)
                    dispatch(turnOnLogOutPageAction(true))
                    handleCloseAction()
            
                })
            })
            .catch((error)=>{
                setIsLoad(false)
                setErrorReg(error)
               setSeverity('error')
               setMessage('Please try again')
               setOpenSnack(true)
            })
           
       },8000)
    }
       
   

        return (
        <div className={'d-flex'}>

            <Dialog open={props.open}  onClose={handleCloseAction} maxWidth={"lg"}>
            <div style={isLoad?{backgroundColor: 'rgba(0, 0, 0, 0.1)'}:{}}>
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
                    {isLogIn &&<Button type='submit' onClick={handleClickLogin}>Log In</Button>}
                </DialogActions>
                <Spinner visible={isLoad}/>
                <AlertMessage open={openSnack} handleClose={handleCloseSnack} severity={severity} info={message} />
                </div>
            </Dialog>


        </div>
    );
};


export default SignUp