import React, {useState} from 'react';
// import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import logo from '../images/CleanItLogo.png';
import style from "../css.modules/home.module.css";

import PhotoDrag from "./joinTeam/PhotoDrag";




const Navigation = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
        <div className={`d-flex justify-content-between ${style.sizing}`}>
      <div className={'ps-5'}>
          <img src={logo} alt={'logo'}/>
      </div>
            <div className={''}>
                <ul className={`${style.nav}`}>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><a href={'#book'}>Book</a></li>
                    <li><Button className={style.link} onClick={handleClickOpen}>Join our team</Button></li>
                    <li><Link to={'/signUp'} id={`${style.signUp}`} className={'ms-4'}>Sign up</Link></li>
                </ul>
            </div>
        </div>

           <PhotoDrag open={open} handleClose={handleClose}/>


        </div>
    );
};

export default Navigation;