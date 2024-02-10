import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    FormLabel,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import style from "../../../css.modules/booking.module.css";
import {addCard, addCardMainBase} from "../../../services/addCleanCard";
import {useDispatch, useSelector} from "react-redux";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { registration} from "../../../services/authService";
import { setCurrentUserUID, turnOnLogOutPageAction } from '../../../actions/CleaningsActions';
import { addRole } from '../../../services/infoService';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { fb, storage } from '../../../config/fireBaseConfig';
import { getUserPhotoUrlAction } from '../../../actions/UserActions';
import AlertMessage from '../../AlertMessage';
import Spinner from '../../Spinner';


const JoinTeamDialog = (props) => {
    const dispatch = useDispatch();
    const {userUid} = useSelector(state=>state.clean);
    const [name, setName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cleanType, setCleanType] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(null);
    const [isPhotoPicked, setIsPhotoPicked] = useState(false);
    const [image, setImage] = useState('');
    const {photoUrl} = useSelector(state=>state.user)
    const [isLoad, setIsLoad] = useState(false)
    const [severity, setSeverity] = useState()
    const [message, setMessage] = useState('')

    const setPhotoUserAction=(e)=>{
        setImage(e.target.files[0]);
        setIsPhotoPicked(true);
    }

    const [openSnack, setOpenSnack] = useState(false);
    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenSnack(false);
      };

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

    const handleChangeName = n=>{
        setName(n);
    }
    
    const handleChangeEmail = n=>{
        setNewEmail(n);
    }

    const handleChangePassword = n=>{
        setPassword(n);
    }

    const handleChangeCleanType = e=>{
        setCleanType(e.target.value);
    }

    const handleChangeDate = date=>{
        setDate(date.$d);
    }
    
    const handleChangeTime = time=>{
        const dateString = time.$d;
        const date = new Date(dateString);
        const options = {
          hour: '2-digit',
          minute: '2-digit'
        };
        const formattedTime = new Intl.DateTimeFormat('en-US', options).format(date);
        setTime(formattedTime)
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


const handleClickAction =  () =>{
    setIsLoad(true)
    if(image)  handleUpload()

    setTimeout(()=>{
          fb.auth().createUserWithEmailAndPassword(newEmail,password)
        .then(userCredits=>
            { dispatch(setCurrentUserUID(userCredits.user.uid))
            const newId = fb.firestore().collection('usersInfo').doc(userCredits.user.uid).collection('cleanCards').doc()
            addCard(name,date,time,cleanType,newEmail,userCredits.user.uid,newId.id)
            addRole('cleaner', name, newEmail, photoUrl,userCredits.user.uid)
            addCardMainBase(name,newEmail,date,time,cleanType,photoUrl,userCredits.user.uid,newId.id);
           })
        .then(()=>{
            setMessage('Welcome to the team!')
            setSeverity('success')
            setIsLoad(false)
            dispatch(turnOnLogOutPageAction(true))
            props.handleClose();
            setOpenSnack(true)
        })
        .catch(()=>{
            setMessage('Please try again')
            setSeverity('error')
            setIsLoad(false)
            setOpenSnack(true)
        })
    },8000)   
}

    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose} maxWidth={"lg"}>
                <DialogTitle>Join our team</DialogTitle>
                <h6>*only for new employees</h6>
                <DialogContent>
    
            <Box style={{border:'1px solid #6c85f1', borderRadius:'5px', padding:'15px'}}>
            {/* <FormLabel>Registration for employees</FormLabel> */}
            {/* <br /> */}
                <TextField id="name" label="Name" variant="standard" onChange={e=>handleChangeName(e.target.value)} />
               <br />
                <TextField id="email" label="Email" variant="standard" onChange={e=>handleChangeEmail(e.target.value)} />
               <br />
                <TextField id="outlined-password-input"  label="Password"  type="password"
          autoComplete="current-password" variant="standard" onChange={e=>handleChangePassword(e.target.value)} />
                <br />
                

                <br />
                <Button style={{marginRight:'10px'}} component="label" variant="contained" onChange={setPhotoUserAction}
                startIcon={<CloudUploadIcon />}
                >
                    Upload photo
                    <VisuallyHiddenInput type="file"  />
                </Button>
                {isPhotoPicked && <FormLabel>{image.name}</FormLabel>}
            </Box><br/>
            <div>
        
                <DatePicker
                    label='Pick date'
                    onChange={e=>handleChangeDate(e)}
                />
              <br />
              <br />

                <TimePicker
                    label='Pick time'
                    onChange={e=>handleChangeTime(e)}
                />
                <br />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
            <InputLabel id="demo-simple-select-label">Choose cleaning type</InputLabel>
                <Select 
                    aria-label="TypesCleaning"
                    label='Choose cleaning type'
                    value={cleanType}
                    labelId="demo-simple-select-label"
                    onChange={handleChangeCleanType}
                >
              
                    <MenuItem  className={`${style.types}`} value={"regularly cleaning expert"} >Regularly Cleaning</MenuItem>
                    <MenuItem className={`${style.types}`} value={"deep cleaning expert"}>Deep Cleaning</MenuItem>
                    <MenuItem className={`${style.types}`} value={"office cleaning expert"}>Office Cleaning</MenuItem>
                    <MenuItem className={`${style.types}`} value={"windows cleaning expert"}>Windows Cleaning</MenuItem>
                </Select>
            </FormControl>
            </div>
            </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose}>Close</Button>
                    <Button onClick={handleClickAction}>Join</Button>
                </DialogActions>
                <Spinner visible={isLoad}/>
            </Dialog>
            
                <AlertMessage open={openSnack} handleClose={handleCloseSnack} severity={severity} info={message} />
        </div>
    );
};

export default JoinTeamDialog;