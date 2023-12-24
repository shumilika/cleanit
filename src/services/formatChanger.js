export const dateFormatChanger = (dateString) =>{
    const timestamp = parseInt(dateString, 10) * 1000; 
    const date = new Date(timestamp);
  
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
  
    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate
}