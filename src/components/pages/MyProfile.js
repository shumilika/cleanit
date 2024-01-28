import React, {  useState} from 'react';
import { useSelector} from "react-redux";
import { Button, Divider, List } from '@mui/material';
import CardBox from '../CardBox';
import { getUserInfoBooking } from '../../services/infoService';

import Person from './Person';
import style from '../../css.modules/booking.module.css';




const MyProfile = () => {
    const {userInfo} = useSelector(state=>state.user);
    const {login,userUid} = useSelector(state=>state.clean);
    const [dataBooking, setDataBooking] = useState([])

    const collection = userInfo.role==='employer'?'booking':'cleanCards'

    const booking =()=>{ 
      getUserInfoBooking(userUid,collection)
      .then(dataArray=>
        setDataBooking(dataArray))
    }

  
  
    if(login===true) {
        return (
            <div className={'text-center'}>
                    <div>
                        <h4>{userInfo.name}</h4>
                        {/* <Avatar alt={userInfo.name} src={userInfo.photo} /> */}
                        <img src={userInfo.photo} alt={userInfo.name} width={'100px'}/><br/>
                        {userInfo.role==='cleaner'&& <Button>add position</Button>}



<br/><div>
{userInfo.role==='employer'
?
<>
<Button onClick={()=>booking()}><p>Check my заказы</p></Button>
<div id={`${style.people_box}`}>
{dataBooking.map((card, i)=>
                    <Person name={card.name} imageUrl={card.photo} 
                    date={card.date} cleanType={card.cleanType} time={card.time}
                                   key={i}/>
                )}
                </div>
</>
:
<>
<Button onClick={()=>booking()}><p>My working sheet</p></Button>


   <List
     sx={{
       width: '100%',
       maxWidth: 360,
       bgcolor: 'background.paper',
     }}
   >
   {dataBooking.map((data=>
       <>
       <CardBox data={data} collection={collection}/>
       <Divider variant="inset" component="li" />
       </>
       ))}
   </List>

</>
}

</div>
                   </div>
          
            </div>
        );
    }
};

export default MyProfile;