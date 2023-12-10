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
import { useDispatch } from 'react-redux';
import { turnOnLogOutPageAction } from '../../actions/CleaningsActions';
import { Link } from 'react-scroll';




const SignUp = (props) => {
   const dispatch = useDispatch()

    const handleClickLogin =()=>{
        // login(email,password);
        props.handleClose();
       dispatch(turnOnLogOutPageAction(true))
    }

    const handleCloseAction=()=>{
        props.handleClose();
    }

        return (
        <div className={'d-flex'}>

            <Dialog open={props.open} onClose={props.handleClose} maxWidth={"lg"}>
                
                <DialogContent>
                    {/* <DialogContentText>
                        Fill all fields
                    </DialogContentText> */}
                    <Registration props={props}/>
                    <br />
                    <p> Do you already have registration? Please <Link>Log in</Link></p>
                   
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseAction}>Close</Button>
                   
                     <Button onClick={handleClickLogin}>LogIn</Button>
                </DialogActions>
            </Dialog>


        </div>
    );
};


export default SignUp