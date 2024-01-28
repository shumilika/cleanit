import {fb} from "../config/fireBaseConfig";
import 'firebase/compat/firestore';


export async function addCard(name,date,time,cleanType,email,uid, cardId){

     await fb.firestore().collection('usersInfo').doc(uid).collection('cleanCards').doc(cardId).set({
        name,email,date,time,cleanType,status:false,userID:uid, cardId,
    });
    
}

export async function addCardMainBase(name,email,date,time,cleanType, photo,uid, cardId){

     await fb.firestore().collection('cleanCardsBase').doc(cardId).set({
                name,
                email,
                date,
                time,
                cleanType,
                photo,
                userID:uid,
                status:false,
                cardId,
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

export async function changeStatusCardBase(card){
   await fb.firestore().collection('cleanCardsBase').doc(card.cardId).update({status: true});   
}

export async function changeStatusUserCards(card){
    await fb.firestore().collection('usersInfo').doc(card.userID).collection('cleanCards').doc(card.cardId).update({status: true});
       
}
 
export async function addBooking(userId,card){
    await fb.firestore().collection('usersInfo').doc(userId).collection('booking').doc(card.cardId).set(
       {...card, status:true}
   )
   
}
      