import React, {useLayoutEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { Avatar, Box, Button, Divider, List, Table } from '@mui/material';
import CardBox from './CardBox';
import { getUserInfoBooking } from '../services/infoService';
import { fb } from '../config/fireBaseConfig';



const MyProfile = () => {
    const {userInfo} = useSelector(state=>state.user);
    const {login} = useSelector(state=>state.clean);
    // console.log(userInfo)
    const [dataBooking, setDataBooking] = useState([])
    const cards = userInfo.cleanCards
    const booking =()=>{ 
      const promise = getUserInfoBooking(fb.auth().currentUser.uid)
      promise.then(dataArray=>
        setDataBooking(dataArray)  )
      
    }

    
    if(login===true) {
        return (
            <div className={'text-center'}>
                    <div>
                        <h4>{userInfo.name}</h4>
                        {/* <Avatar alt={info.name} src={info.photo} /> */}
                        <img src={userInfo.photo} width={'100px'}/><br/>
                        {userInfo.role==='cleaner'&& <Button>add position</Button>}



<br/>{userInfo.role==='employer'&&<div>
<Button onClick={()=>booking()}><p>Check my заказы</p></Button>
{dataBooking.map((data=>
   <List
     sx={{
       width: '100%',
       maxWidth: 360,
       bgcolor: 'background.paper',
     }}
   >
       <CardBox data={data}/>
       <Divider variant="inset" component="li" />

   </List>
  ))}
</div>}
   
   
   {userInfo.role==='cleaner'&& <div>
   <p>My working sheet</p>
  {/* {cards.map((card=> */}
   <List
     sx={{
       width: '100%',
       maxWidth: 360,
       bgcolor: 'background.paper',
     }}
   >
       {/* <CardBox data={card}/> */}
       <Divider variant="inset" component="li" />

   </List>
  {/* ))} */}
  </div>  }

            
                   </div>
                    {/* )} */}
                <Link to={'/home'}>Home</Link>

            </div>
        );
    }
};

export default MyProfile;