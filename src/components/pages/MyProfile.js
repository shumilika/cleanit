import React, {  useEffect, useState} from 'react';
import { useDispatch, useSelector} from "react-redux";
import { Box, Button, IconButton, ImageListItem, ImageListItemBar, Paper, Tooltip } from '@mui/material';
import CardBox from '../CardBox';
import { getUserInfo, getUserInfoBooking } from '../../services/infoService';
import style from '../../css.modules/booking.module.css';
import BookingCleaners from './BookingCleaners';
import AddPositionCleaner from './AddPositionCleaner';
import { fillUserInfoAction } from '../../actions/UserActions';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';

const MyProfile = () => {
    const {userInfo} = useSelector(state=>state.user);
    const dispatch = useDispatch() 
    const {userUid} = useSelector(state=>state.clean);
    const [dataBooking, setDataBooking] = useState([])
    const [openPosition, setOpenPosition] = useState(false)
    const [isClick, setIsClick] = useState(false)
    const handleClosePosition = () =>{
      setOpenPosition(false)
    }

    const buttonStyle = {
      backgroundColor:'#a2b2f5','&:hover': {
       
        backgroundColor: '#778ff5',
      },
    }

    const collection = userInfo.role==='employer'?'booking':'cleanCards'

    const booking =()=>{ 
     
      getUserInfoBooking(userUid,collection)
      .then(dataArray=>
        setDataBooking(dataArray))
        setIsClick(true)
    }

    useEffect(()=>{
      getUserInfo(userUid)
      .then(data=>{
        dispatch(fillUserInfoAction(data)) 
      })
    },[])
  
   
    return (
      <div>
                    
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap', 
          }}
        >
          <Paper elevation={6} sx={{width: '20%',margin:'50px', padding:'10px'}} id={style.my_box}>
                    
            <ImageListItem key={userInfo.photo} sx={{ width:'150px',  margin:'0 20%'}}>
              <img
                src={`${userInfo.photo}`}
                alt={userInfo.name}
                loading="lazy"
                style={{borderRadius:'6px'}}
              />
              
              <ImageListItemBar
                title={userInfo.name}
                subtitle={userInfo.email}
                position="below"
              />
            </ImageListItem>
           
            {userInfo.role==='cleaner'&& 
            <IconButton  sx={{margin:'0 40%', position:'relative', top:'90px',backgroundColor:'#a2b2f5','&:hover': {
       
       backgroundColor: '#778ff5',
     },}} onClick={()=>setOpenPosition(true)}>
            <Tooltip title='Add position'>

            <AddIcon />
            </Tooltip>
              </IconButton>}
        
          </Paper>
        
          <Paper elevation={6} sx={{width: '40%',margin:'50px', padding:'10px'}} id={style.booking_box}>
          
             {!isClick && <Button onClick={()=>booking()} endIcon={<KeyboardArrowDownIcon/>} sx={buttonStyle} variant='contained'>
              {userInfo.role==='employer'? 'My bookings':'My cards'} 
              </Button>}
            

            {userInfo.role==='employer'
              ?
                dataBooking.map((card, i)=>
                  <BookingCleaners card={card} name={card.name} imageUrl={card.photo} 
                      date={card.date} cleanType={card.cleanType} time={card.time}
                                    key={i}
                  />                  
                )
              :
                dataBooking.map((data,i)=>
                  <CardBox data={data} key={i}/>
                )
            }
   
              
       
           
        
          </Paper>
         
                     
         
        </Box>
                  
        <AddPositionCleaner open={openPosition} handleClose={handleClosePosition}/>
      </div>
    ); 
};

export default MyProfile;