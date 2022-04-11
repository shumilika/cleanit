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
// import style from "../../css.modules/booking.module.css";
import {useDispatch, useSelector} from "react-redux";
import {fillDateAction, fillNameAction, fillTimeAction} from "../../actions/CleaningsActions";

const PhotoDrag = (props) => {
const dispatch = useDispatch();
    const person = useSelector(state=>state);
    const [name, setName] = useState('');
    // const [cleanType, setCleanType] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleChangeName = n=>{
        setName(n);
        dispatch(fillNameAction(name))
        console.log(person)
    }
    // const handleChangeCleanType = cleanType=>{
    //     setCleanType(cleanType);
    //     console.log(name,cleanType,date, time)
    // }
    const handleChangeDate = d=>{
        setDate(d);
        dispatch(fillDateAction(date))
    }
    const handleChangeTime = t=>{
        setTime(t);
        dispatch(fillTimeAction(time))
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
{/*<button type={"submit"} onSubmit={handleSubmitForm}>Join</button>*/}
<span>Choose cleaning type</span><br/>
                {/*<select className={`form-select ${style.typesCleaning}`} aria-label="TypesCleaning" onSelect={e=>handleChangeCleanType(e.target.value)}>*/}
                {/*    <option  className={`${style.types}`} value="regularly cleaning">Regularly Cleaning</option>*/}
                {/*    <option className={`${style.types}`} value="deep cleaning">Deep Cleaning</option>*/}
                {/*    <option className={`${style.types}`} value="office cleaning">Office Cleaning</option>*/}
                {/*    <option className={`${style.types}`} value="windows cleaning">Windows Cleaning</option>*/}
                {/*</select>*/}
            </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default PhotoDrag;