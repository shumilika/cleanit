import { Avatar,  ListItem, ListItemAvatar, ListItemText, Tooltip } from "@mui/material";
import { deepOrange, green } from "@mui/material/colors";
import { dateFormatChanger } from "../services/formatChanger";



const CardBox = ({data, collection}) => {

    const dateString = dateFormatChanger(data.date.seconds);
   
    
    const tooltipTitle = ()=>{
        if(!data.status) return 'active'
        else return 'hired'
    }
    const statusColor = ()=>{
        if(!data.status) return deepOrange[500]
        else return green[500]
    }
    if(collection==='cleanCards')
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
      </ListItem>
     
     
    )
    else  return (
        <ListItem>
        <ListItemAvatar>
            <Tooltip title={tooltipTitle()}>
                <Avatar  sx={{ bgcolor: statusColor() }}>
                    i
                </Avatar>
            </Tooltip>
        </ListItemAvatar>
        <ListItemText primary={data.cleanType} secondary={dateString+' '+data.time} />
      </ListItem>
     
     
    );
};

export default CardBox;