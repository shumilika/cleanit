import { Avatar,  ButtonGroup,  IconButton,  ListItem, ListItemAvatar, ListItemText, Tooltip } from "@mui/material";
import { deepOrange, green } from "@mui/material/colors";
import { dateFormatChanger } from "../services/formatChanger";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete'
import ModalDeleteCleanСard from "./pages/ModalDeleteCleanСard";
import { useState } from "react";


const CardBox = ({data}) => {

    const dateString = dateFormatChanger(data.date.seconds)
    const [open, setOpen] = useState(false)
    const handleClose = () =>{
        setOpen(false)
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
            <IconButton aria-label="edit">
                <EditIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="delete" onClick={()=>setOpen(true)}>
                <DeleteIcon fontSize="small" />
            </IconButton>
        </ButtonGroup>}
        <ModalDeleteCleanСard open={open} onClose={handleClose} card={data} />
      </ListItem>
     
     
    )
    
};

export default CardBox;