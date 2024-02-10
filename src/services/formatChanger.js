export const dateFormatChanger = (dateString) =>{
    const timestamp = parseInt(dateString, 10) * 1000; 
    const date = new Date(timestamp);
  
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
  
    const formattedDate = `${month}.${day}.${year}`;
    return formattedDate
}

export const convertDateToTimestamp = (dateString) => {
    const parsedDate = new Date(dateString);
    const timestamp = Math.floor(parsedDate.getTime() / 1000);
        
    return timestamp;
  };