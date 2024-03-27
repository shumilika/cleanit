import React, {useEffect, useState} from 'react';
import {Button, Menu, MenuItem} from "@mui/material";
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
import {fillUserInfoAction} from "../../actions/UserActions";
import MenuIcon from '@mui/icons-material/Menu';


const Navigation = () => {
    const {login} = useSelector(state=>state.clean);
    const navigate = useNavigate()
    const [openTeam, setOpenTeam] = useState(false);
    const [openSign, setOpenSign] = useState(false);
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


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
        handleClose()
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
      <div className={`ps-5 ${style.boxLogo}`}>
          <Link to={'/'}><img src={logo} alt={'logo'} id={style.logoImg}/></Link>
      </div>
            <div className={style.navBox}>
                <ul className={login ? `${style.nav}  ${style.navLogin}` : style.nav}>

                        {login===true &&<li> <Link to={myProfilePage}>My profile</Link></li>}
                        {login===false && <li><Link to={homePage}>Home</Link></li>}

                    <li><a href={'#book'}>Book</a></li>
                    {login===false && <li><Button id={style.link} onClick={handleClickOpenTeam}>Join our team</Button></li>}
                    <li id={style.signUpLi}>{login===true && <Button id={style.logOut} onClick={handleLogOut}>Log out</Button>}
                     {login===false && <Button id={style.signUp} onClick={handleClickOpenSign}>Sign in</Button>}
                    </li>
                </ul>
            </div>
            <div className={`${style.navBoxMinSize}`}>
            <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{margin:'20px'}}
              >
        <MenuIcon sx={{color:'#593D3D', fontSize:'28px'}} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       {login===true && <MenuItem component={Link} to={myProfilePage}  onClick={handleClose}>My profile</MenuItem>}
       {login===false &&<MenuItem component={Link} to={homePage} > Home</MenuItem>}
        <MenuItem component='a' href={'#book'} onClick={handleClose}>Book</MenuItem>
        {login===false &&<MenuItem onClick={handleClickOpenTeam}>Join our team</MenuItem>}
      
        {login===true && <MenuItem onClick={handleLogOut}>Log out</MenuItem>}

        {login===false && <MenuItem onClick={handleClickOpenSign}>Sign in</MenuItem>}
        

      </Menu>
            </div>
        </div>

           <JoinTeamDialog open={openTeam} handleClose={handleCloseTeam}/>
            <SignUp open={openSign} handleClose={handleCloseSign}/>

        </div>
    );
};

export default Navigation;