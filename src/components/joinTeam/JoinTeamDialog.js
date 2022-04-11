import React, {useState} from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@mui/material";
import style from "../../css.modules/booking.module.css";
import {useDispatch, useSelector} from "react-redux";
import {fillPeopleTableAction} from "../../actions/CleaningsActions";

const JoinTeamDialog = (props) => {
const dispatch = useDispatch();
    const person = useSelector(state=>state);
    const [name, setName] = useState('');
    const [cleanType, setCleanType] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleChangeName = n=>{
        setName(n);

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

    const handleClickAction =()=>{
        dispatch(fillPeopleTableAction(name,date,time, cleanType));
        props.handleClose();
        console.log(person)
    }


    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose} maxWidth={"lg"}>
                <DialogTitle>Join our team</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Fill all fields
                    </DialogContentText>


            <Box>
                <TextField id="name" label="name" variant="standard" onChange={e=>handleChangeName(e.target.value)} />
            </Box><br/>
            <div>
                <span>Choose date</span><br/>
                <input type={"date"} onChange={e=>handleChangeDate(e.target.value)}/><br/><br/>
                <span>Pick time</span><br/>
                <input type={"time"} onChange={e=>handleChangeTime(e.target.value)}/><br/><br/>

            <span>Choose cleaning type</span><br/>
                <select className={`form-select ${style.typesCleaning}`} aria-label="TypesCleaning" onChange={handleChangeCleanType}>
                    <option  className={`${style.types}`} value="regularly cleaning expert" >Regularly Cleaning</option>
                    <option className={`${style.types}`} value="deep cleaning expert">Deep Cleaning</option>
                    <option className={`${style.types}`} value="office cleaning expert">Office Cleaning</option>
                    <option className={`${style.types}`} value="windows cleaning expert">Windows Cleaning</option>
                </select>
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