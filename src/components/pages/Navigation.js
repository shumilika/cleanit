import React, {useEffect, useState} from 'react';
import {Button} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import logo from '../../images/CleanItLogo.png';
import style from "../../css.modules/home.module.css";
import JoinTeamDialog from "./joinTeam/JoinTeamDialog";
import SignUp from "./signUP$In/SignUp";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../../services/authService";
import {
    fillCardDataAction,
    setCurrentUserRoleAction,
    turnOnLogOutPageAction
} from "../../actions/CleaningsActions";
import {homePage, myProfilePage} from "../../utils/constants";
import {getCleanCard} from "../../services/addCleanCard";
import {addInfo, getUserInfo} from "../../services/infoService";
import {fillUserInfoAction} from "../../actions/UserActions";


const Navigation = () => {
    const {role,login,email,uid} = useSelector(state=>state.clean);
    const navigate = useNavigate()
    const [openTeam, setOpenTeam] = useState(false);
    const [openSign, setOpenSign] = useState(false);
    const dispatch = useDispatch();


    const handleClickOpenTeam = () => {
        setOpenTeam(true); 
    }

    const handleCloseTeam = () => {
        setOpenTeam(false);
    }

    const handleClickOpenSign = () => {
        setOpenSign(true);
    }

    const handleCloseSign = () => {
        setOpenSign(false);
    }

    const handleLogOut=()=>{
        logOut()
        navigate('/')
        dispatch(setCurrentUserRoleAction(''))
        dispatch(turnOnLogOutPageAction(false))
        dispatch(fillUserInfoAction({}))
    }

    useEffect(()=>{
        getCleanCard().then(data=>{
            const filteredData = data.filter(item=>item.status===false)
            dispatch(fillCardDataAction(filteredData))
        }).catch(e=>{
            
        })
    },[])
       

    return (
        <div>
        <div className={`d-flex justify-content-between ${style.sizing}`}>
      <div className={'ps-5'}>
          <Link to={homePage}><img src={logo} alt={'logo'}/></Link>
      </div>
            <div className={''}>
                <ul className={`${style.nav}`}>

                        {login===true &&<li> <Link to={myProfilePage}>My profile</Link></li>}
                        {login===false && <li><Link to={homePage}>Home</Link></li>}

                    <li><a href={'#book'}>Book</a></li>
                    {login===false && <li><Button id={style.link} onClick={handleClickOpenTeam}>Join our team</Button></li>}
                    <li>{login===true && <Button id={style.logOut} onClick={handleLogOut}>Log out</Button>}
                     {login===false && <Button id={style.signUp} onClick={handleClickOpenSign}>Sign in</Button>}
                    </li>
                </ul>
            </div>
        </div>

           <JoinTeamDialog open={openTeam} handleClose={handleCloseTeam}/>
            <SignUp open={openSign} handleClose={handleCloseSign}/>

        </div>
    );
};

export default Navigation;