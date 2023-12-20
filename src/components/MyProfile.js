import React, {useLayoutEffect} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { Avatar } from '@mui/material';

const MyProfile = () => {
const {userInfo} = useSelector(state=>state.user);
const {login} = useSelector(state=>state.clean);
  
    if(login===true) {
        return (
            <div className={'text-center'}>
                {userInfo.user?.map((info)=>
                 <div>
                    Hello,{info.name}!
                    {/* <Avatar alt={info.name} src={info.photo} /> */}
                    <img src={info.photo} width={'100px'}/><br/>

                user status: {info.role}<br/>

    <br/>Check my заказы
            </div>
                    )}
                <Link to={'/home'}>Home</Link>

            </div>
        );
    }
};

export default MyProfile;