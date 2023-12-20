import React, {useState} from 'react';
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

const JoinTeamDialog = (props) => {
    const dispatch = useDispatch();
    const {email} = useSelector(state=>state.clean);
    const [name, setName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cleanType, setCleanType] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

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
        setDate(date);
    }
    const handleChangeTime = time=>{
        setTime(time);
    }

    const handleClickRegistration = () => {
        registration(newEmail, password);
        addRole('cleaner', name, newEmail);
        dispatch(turnOnLogOutPageAction(true))

    }

    const handleClickAction =()=>{
        // dispatch(fillPeopleTableAction(name,date,time, cleanType));
        handleClickRegistration()
        addCard(name,date, time, cleanType,email)
        addCardMainBase(name,email,date,time,cleanType);
        props.handleClose();
        
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
            <FormLabel>Quick registration</FormLabel>
            <br />
                <TextField id="name" label="Name" variant="standard" onChange={e=>handleChangeName(e.target.value)} />
               <br />
                <TextField id="email" label="Email" variant="standard" onChange={e=>handleChangeEmail(e.target.value)} />
               <br />
                <TextField id="password" label="Password" variant="standard" onChange={e=>handleChangePassword(e.target.value)} />
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
                  onChange={handleChangeCleanType}>
              
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
            </Dialog>
        </div>
    );
};

export default JoinTeamDialog;