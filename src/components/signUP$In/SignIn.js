import React, {useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import {login, registration} from "../../services/authService";
import {useDispatch, useSelector} from "react-redux";
import {
    setCurrentUserEmailAction,
    setCurrentUserRoleAction,
    turnOnLogOutPageAction
} from "../../actions/CleaningsActions";
import style from '../../css.modules/sign.module.css';
import {addRole} from "../../services/infoService";


const SignIn = (props) => {
    const [password, setPassword] = useState('');
    const [regist,setRegist] = useState(false);
    const {role,email} = useSelector(state=>state.clean);
    const dispatch = useDispatch();
    const [name,setName] = useState('');
    const {userInfo} = useSelector(state=>state.user);

    // const getRoleFromBase=()=>{
    //     let baseRole='';
    //     if(login===true) {
    //         userInfo.user.map((info)=>{
    //             baseRole=info.role;
    //         })
    //         console.log(baseRole)
    //
    //
    //     }return baseRole;
    //     }

    const handleClickLogin =()=>{
        login(email,password);
        props.handleClose();
        // console.log(getRoleFromBase)
        // dispatch(setCurrentUserRoleAction(getRoleFromBase))
       dispatch(turnOnLogOutPageAction(true))
    }
    const handleClickRegistration =()=>{
        registration(email,password);
        console.log(role)
        addRole(role,name,email);
        props.handleClose();
        dispatch(turnOnLogOutPageAction(true))
    }
    const handleCloseAction=()=>{
        props.handleClose();
    }
const registrationButtonAction=()=>{
        setRegist(true);
}
    const signInButtonAction=()=>{
        setRegist(false);
    }

    const setRoleAction=(e)=>{
        dispatch(setCurrentUserRoleAction(e.target.value))
    }

        return (
        <div className={'d-flex'}>

            <Dialog open={props.open} onClose={props.handleClose} maxWidth={"lg"}>
                <DialogTitle>
                    <button className={style.sign_btn} onClick={registrationButtonAction}>Registration</button>
                     /
                    <button className={style.sign_btn} onClick={signInButtonAction}>SignIn</button>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Fill all fields
                    </DialogContentText>

                    <div>

                        <input type={'text'} placeholder={'enter email'} value={email}
                               onChange={e=>dispatch(setCurrentUserEmailAction(e.target.value))}/><br/>
                        <input type={'text'} placeholder={'enter password'} value={password}
                               onChange={e=>setPassword(e.target.value)}/><br/>

                        {regist===true &&
                            <div>
                                <input type={'text'} placeholder={'enter name'} value={name}
                                       onChange={e=>setName(e.target.value)}/><br/>
                                <select onChange={setRoleAction} >
                                    <option>chose</option>
                                    <option value={'employer'}>employer</option>
                                    <option value={'cleaner'}>cleaner</option>
                                </select>
                            </div>
                        }
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseAction}>Close</Button>
                    {regist===true && <Button onClick={handleClickRegistration}>Registration</Button>}
                    {regist===false && <Button onClick={handleClickLogin}>LogIn</Button>}
                </DialogActions>
            </Dialog>


        </div>
    );
};


export default SignIn