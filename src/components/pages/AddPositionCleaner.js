import React, { useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import style from "../../css.modules/booking.module.css";
import {addCard, addCardMainBase} from "../../services/addCleanCard";
import {useDispatch, useSelector} from "react-redux";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { styled } from '@mui/material/styles';
import { fb } from '../../config/fireBaseConfig';
import AlertMessage from '../AlertMessage';
import Spinner from '../Spinner';


const AddPositionCleaner = (props) => {
    const {userInfo} = useSelector(state=>state.user)
    const {userUid} = useSelector(state=>state.clean);
    const [cleanType, setCleanType] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(null);
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
 

const handleClickAction =  () =>{
    setIsLoad(true)
    
    const newId = fb.firestore().collection('usersInfo').doc(userUid).collection('cleanCards').doc()
    addCard(userInfo.name,date,time,cleanType,userInfo.email,userUid,newId.id)
    
        
        addCardMainBase(userInfo.name,userInfo.email,date,time,cleanType,userInfo.photo,userUid,newId.id)
        .then(()=>{
            setMessage('Position added successfuly!')
            setSeverity('success')
            setIsLoad(false)
            props.handleClose();
            setOpenSnack(true)
            props.handleUpdatePeopleCards()
            props.booking()
            
        })
        .catch(()=>{
            setMessage('Please try again')
            setSeverity('error')
            setIsLoad(false)
            setOpenSnack(true)
        })
    // })
    //     .catch(()=>{
    //         setMessage('Please try again')
    //         setSeverity('error')
    //         setIsLoad(false)
    //         setOpenSnack(true)
    //     })
   
}

    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose} maxWidth={"lg"}>
                <DialogTitle>Add one more card</DialogTitle>
                
                <DialogContent>
    
           
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
                    <Button onClick={handleClickAction}>Add</Button>
                </DialogActions>
                <Spinner visible={isLoad}/>
            </Dialog>
            
                <AlertMessage open={openSnack} handleClose={handleCloseSnack} severity={severity} info={message} />
        </div>
    );
};

export default AddPositionCleaner;