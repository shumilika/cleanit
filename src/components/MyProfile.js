import React, {useLayoutEffect} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { Avatar, Box, Button, Divider, List, Table } from '@mui/material';
import CardBox from './CardBox';



const MyProfile = () => {
    const {userInfo} = useSelector(state=>state.user);
    const {login} = useSelector(state=>state.clean);
    console.log(userInfo)
    const cards = userInfo.cleanCards
    const bookings = userInfo.bookings
    
    if(login===true) {
        return (
            <div className={'text-center'}>
                {userInfo.user?.map((info)=>
                    <div>
                        <h4>{info.name}</h4>
                        {/* <Avatar alt={info.name} src={info.photo} /> */}
                        <img src={info.photo} width={'100px'}/><br/>
                        {info.role==='cleaner'&& <Button>add position</Button>}



<br/>{info.role==='employer'&&<div>
<p>Check my заказы</p>
{bookings.map((data=>
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
   
   
   {info.role==='cleaner'&& <div>
   <p>My working sheet</p>
  {cards.map((card=>
   <List
     sx={{
       width: '100%',
       maxWidth: 360,
       bgcolor: 'background.paper',
     }}
   >
       <CardBox data={card}/>
       <Divider variant="inset" component="li" />

   </List>
  ))}
  </div>  }

            
                   </div> )}
                <Link to={'/home'}>Home</Link>

            </div>
        );
    }
};

export default MyProfile;