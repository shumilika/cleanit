import React, {useLayoutEffect} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const MyProfile = () => {
const {userInfo} = useSelector(state=>state.user);
const {login} = useSelector(state=>state.clean);
    // useLayoutEffect(() => {
    //     // do side effects
    //     return () =>
    // }, []);
    if(login===true) {
        return (
            <div className={'text-center'}>
                {userInfo.user?.map((info)=>
 <div>
                    Hello,{info.name}!
     {console.log(info.photo)}
                    <img src={`${info.photo}`} width={'100px'}/><br/>

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