import {fb} from "../config/fireBaseConfig";
import 'firebase/compat/firestore';
import firebase from "firebase/compat/app";

export async function addCard(name,date,time,cleanType,email){

    const ref = await fb.firestore().collection('usersInfo').doc(email);
    const doc = await ref.get();
    if(doc.exists){
        await ref.update({
            cleanCards:firebase.firestore.FieldValue.arrayUnion({
                name,
                date,
                time,
                cleanType,
                status:false
            })
        })
    }else{
        await ref.set({cleanCards: [{name,date,time,cleanType,status:false}]})
    }
}
export async function addCardMainBase(name,email,date,time,cleanType){

    const ref = await fb.firestore().collection('cleanCardsBase').doc('active');
    const doc = await ref.get();
    if(doc.exists){
        await ref.update({
            cleanCards:firebase.firestore.FieldValue.arrayUnion({
                name,
                email,
                date,
                time,
                cleanType,
                status:false
            })
        })
    }else{
        await ref.set({cleanCards: [{name,email,date,time,cleanType,status:false}]})
    }
}

export async function getCleanCard(){
    const ref = fb.firestore().collection('cleanCardsBase').doc("active");
    const doc = await ref.get();
    if(doc.exists){
        return doc.data();
    }else{
        return {cleanCards:[]};
    }
}