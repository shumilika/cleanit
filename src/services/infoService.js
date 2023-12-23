import {fb} from "../config/fireBaseConfig";
import 'firebase/compat/firestore';
import firebase from "firebase/compat/app";

export async function addRole(role,name,email,photo,uid){

    const ref = await fb.firestore().collection('usersInfo').doc(`${uid}`);
    const doc = await ref.get();
    if(doc.exists){
        await ref.update(firebase.firestore.FieldValue.arrayUnion({
                role,
                name,
                photo,
                email

            })
        )
    }else{
        await ref.set({role,name,photo,email})
    }
}




export async function getUserInfo(uid){
    const ref = fb.firestore().collection('usersInfo').doc(uid);
    const doc = await ref.get();
    if(doc.exists){
        return doc.data();
    }else{
        return {};
    }
}

export async function getUserInfoBooking(uid){
    const ref = fb.firestore().collection('usersInfo').doc(uid).collection('booking');
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