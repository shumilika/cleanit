import {fb} from "../config/fireBaseConfig";
import 'firebase/compat/firestore';


export async function addCard(name,date,time,cleanType,email,uid){

     await fb.firestore().collection('usersInfo').doc(uid).collection('cleanCards').add({
        name,email,date,time,cleanType,status:false
    });
    
}
export async function addCardMainBase(name,email,date,time,cleanType, photo,uid){

     await fb.firestore().collection('cleanCardsBase').add({
        name,
                email,
                date,
                time,
                cleanType,
                photo,
                userID:uid,
                status:false
    });
   
}

export async function getCleanCard(){
    const ref = fb.firestore().collection('cleanCardsBase');
    const doc = await ref.get();

    const resultArray = []
    doc.forEach(doc => {
        resultArray.push(doc.data());
    });
    
    if(resultArray.length>0){
        return resultArray
    }else{
        return [];
    }
}



    
      