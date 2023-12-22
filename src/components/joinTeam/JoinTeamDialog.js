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
import style from "../../css.modules/booking.module.css";
import {addCard, addCardMainBase} from "../../services/addCleanCard";
import {useDispatch, useSelector} from "react-redux";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { registration} from "../../services/authService";
import { turnOnLogOutPageAction } from '../../actions/CleaningsActions';
import { addRole } from '../../services/infoService';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { storage } from '../../config/fireBaseConfig';
import { getUserPhotoUrlAction } from '../../actions/UserActions';

const JoinTeamDialog = (props) => {
    const dispatch = useDispatch();
    // const {email} = useSelector(state=>state.clean);
    const [name, setName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cleanType, setCleanType] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(null);
    const [isPhotoPicked, setIsPhotoPicked] = useState(false);
    const [image, setImage] = useState('');
    const {photoUrl} = useSelector(state=>state.user);

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
        const dayTime= new Date(time.$d)
        const extractedTime =dayTime.getHours() + ":" + dayTime.getMinutes();
        setTime(extractedTime);
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
        
        setTimeout(()=>{
            registration(newEmail, password);
        },5000)
        dispatch(turnOnLogOutPageAction(true))
    }


    const handleClickAction = async ()=>{
        try{
            await handleClickRegistration()
            await addRole('cleaner', name, newEmail, photoUrl)
            
        } catch (error){
            // console.log('error'+error)
        }finally{
            addCard(name,date,time,cleanType,newEmail)
            addCardMainBase(name,newEmail,date,time,cleanType,photoUrl);
            props.handleClose();
        }
    }


    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose} maxWidth={"lg"}>
                <DialogTitle>Join our team</DialogTitle>
                <DialogContent>
                    {/* <DialogContentText>
                        Fill all fields
                    </DialogContentText> */}


            <Box style={{border:'1px solid #6c85f1', borderRadius:'5px', padding:'15px'}}>
            <FormLabel>Registration for employees</FormLabel>
            <br />
                <TextField id="name" label="Name" variant="standard" onChange={e=>handleChangeName(e.target.value)} />
               <br />
                <TextField id="email" label="Email" variant="standard" onChange={e=>handleChangeEmail(e.target.value)} />
               <br />
                <TextField id="password" label="Password" variant="standard" onChange={e=>handleChangePassword(e.target.value)} />
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
              
                    <MenuItem  className={`${style.types}`} value={"regular"} >Regularly Cleaning</MenuItem>
                    <MenuItem className={`${style.types}`} value={"deep"}>Deep Cleaning</MenuItem>
                    <MenuItem className={`${style.types}`} value={"office"}>Office Cleaning</MenuItem>
                    <MenuItem className={`${style.types}`} value={"windows"}>Windows Cleaning</MenuItem>
                </Select>
            </FormControl>
            </div>
            </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose}>Close</Button>
                    <Button onClick={handleClickAction}>Join</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default JoinTeamDialog;