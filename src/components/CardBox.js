import { Avatar,  ButtonGroup,  Divider,  IconButton,  ListItem, ListItemAvatar, ListItemText, Tooltip } from "@mui/material";
import { deepOrange, green } from "@mui/material/colors";
import { dateFormatChanger } from "../services/formatChanger";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete'
import ModalDeleteCleanСard from "./pages/ModalDeleteCleanСard";
import { useState } from "react";
import UpdatePositionCleaner from "./pages/UpdatePositionCleaner";


const CardBox = ({data}) => {

    const dateString = dateFormatChanger(data.date.seconds)
    const [open, setOpen] = useState(false)
    const handleClose = () =>{
        setOpen(false)
    }
    const [openUpdateModal, setOpenUpdateModal] = useState(false)
    const handleCloseUpdateModal = () => {
        setOpenUpdateModal(false)
    }
    
    const tooltipTitle = ()=>{
        if(!data.status) return 'active'
        else return 'hired'
    }
    const statusColor = ()=>{
        if(data.status) return deepOrange[500]
        else return green[500]
    }
   
    return (
       <ListItem>
     
            <ListItemAvatar>
                <Tooltip title={tooltipTitle()}>
                    <Avatar  sx={{ bgcolor: statusColor() }}>
                        i
                    </Avatar>
                </Tooltip>
            </ListItemAvatar>
       
            <ListItemText primary={data.cleanType} secondary={dateString+' '+data.time} />
            {!data.status && <ButtonGroup>
                <IconButton aria-label="edit" onClick={()=>setOpenUpdateModal(true)}>
                <Tooltip title='update'>
                    <EditIcon fontSize="small" />
                    </Tooltip>
                </IconButton>
                <IconButton aria-label="delete" onClick={()=>setOpen(true)}>
                <Tooltip title='delete'>
                <DeleteIcon fontSize="small" />
                </Tooltip>
                </IconButton>
            </ButtonGroup>}
            <ModalDeleteCleanСard open={open} onClose={handleClose} card={data} />
            <UpdatePositionCleaner open={openUpdateModal} handleClose={handleCloseUpdateModal} card={data}/>
    
       </ListItem>
     
    )
    
};

export default CardBox;