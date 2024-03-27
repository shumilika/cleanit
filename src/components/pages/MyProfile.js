import React, {  useEffect, useState} from 'react';
import { useDispatch, useSelector} from "react-redux";
import { Box, Button, IconButton, ImageListItem, ImageListItemBar, Paper, Tooltip } from '@mui/material';
import CardBox from '../CardBox';
import { getUserInfo, getUserInfoBooking } from '../../services/infoService';
import style from '../../css.modules/myProfile.module.css'
import BookingCleaners from './BookingCleaners';
import AddPositionCleaner from './AddPositionCleaner';
import { fillUserInfoAction, setIsUpdateCardsAction } from '../../actions/UserActions';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import { getCleanCard } from '../../services/addCleanCard';
import { fillCardDataAction } from '../../actions/CleaningsActions';

const MyProfile = ({bookRef}) => {
    const {userInfo,isUpdateCards} = useSelector(state=>state.user);
    const dispatch = useDispatch() 
    const {userUid} = useSelector(state=>state.clean);
    const [dataBooking, setDataBooking] = useState([])
    const [isDataBookingEmpthy, setIsDataBookingEmpthy] = useState(false)
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


    const handleUpdatePeopleCards = () =>{
      getCleanCard().then(data=>{
        const filteredData = data.filter(item=>item.status===false)
        dispatch(fillCardDataAction(filteredData))
    })
    }

    const booking =()=>{ 
      getUserInfoBooking(userUid,collection)
      .then(dataArray=>{
        if(dataArray.length<=0){setIsDataBookingEmpthy(true)}
        else{setIsDataBookingEmpthy(false)}
        setDataBooking(dataArray)
        
      })
       
        setIsClick(true)
    }

    useEffect(()=>{
      getUserInfo(userUid)
      .then(data=>{
        dispatch(fillUserInfoAction(data)) 
      })
    },[])

    useEffect(()=>{
      if(isUpdateCards){

        booking()
        handleUpdatePeopleCards()
        dispatch(setIsUpdateCardsAction(false))

      }
    },[isUpdateCards])
  
   const handleLinktoBook =()=>{
    bookRef.current.scrollIntoView()
   }

    return (
      <div>
                    
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap', 
          }}
          id={style.minSizeBox}
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
            <IconButton
            id={style.btnAddCard} 
             sx={{margin:'0 40%', position:'relative',
             top:'90px',backgroundColor:'#a2b2f5','&:hover': {
              backgroundColor: '#778ff5',
            },}} onClick={()=>setOpenPosition(true)}>
            <Tooltip title='Add position'>

            <AddIcon />
            </Tooltip>
              </IconButton>}
        
          </Paper>
        
          <Paper elevation={6} sx={{width: '40%',margin:'50px', padding:'10px'}}
           id={style.booking_box}>
          
             {!isClick && <Button onClick={()=>booking()} 
             endIcon={<KeyboardArrowDownIcon/>} sx={buttonStyle} variant='contained'>
              {userInfo.role==='employer'? 'My bookings':'My cards'} 
              </Button>}
            

            {userInfo.role==='employer'
              ?
                dataBooking.map((card, i)=>
                  <BookingCleaners card={card} key={i}/>                  
                )
              :
                dataBooking.map((data,i)=>
                  <CardBox data={data} key={i}/>
                )
            }
            {(isDataBookingEmpthy&&userInfo.role==='employer') && <p>You have no booking yet. <br className={style.minSize}/>
            You can hire new cleaner <Button onClick={handleLinktoBook}>here</Button></p>}
   
            {(isDataBookingEmpthy&&userInfo.role==='cleaner') && <p>You have no cards yet. <br className={style.minSize}/>
            You add new card <Button onClick={()=>setOpenPosition(true)}>here</Button></p>}
   
       
           
        
          </Paper>
         
                     
         
        </Box>
                  
        <AddPositionCleaner open={openPosition} handleClose={handleClosePosition}  
          handleUpdatePeopleCards={handleUpdatePeopleCards} booking={booking}
        />
      </div>
    ); 
};

export default MyProfile;