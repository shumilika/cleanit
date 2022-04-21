import {fb} from "../config/fireBaseConfig";
import 'firebase/compat/firestore';
import firebase from "firebase/compat/app";

export async function addRole(role,email){

    const ref = await fb.firestore().collection('usersInfo').doc(`${email}`);
    const doc = await ref.get();
    if(doc.exists){
        await ref.update({
            user:firebase.firestore.FieldValue.arrayUnion({
                role,
                status:false
            })
        })
    }else{
        await ref.set({user: [{role,status:false}]})
    }
}


export async function addInfo(name,photo,email){

    const ref = await fb.firestore().collection('usersInfo').doc(email);
    const doc = await ref.get();
    if(doc.exists){
        await ref.update({
            user:firebase.firestore.FieldValue.arrayUnion({
                name,
                photo,
                status:false
            })
        })
    }else{
        await ref.set({user: [{name,photo,status:false}]})
    }
}

// export async function getUidAction(){
// let userId =null
// await firebase.auth().onAuthStateChanged((user)=>{
//     if(user){
//         userId=user.uid;
//         console.log('userId = '+userId)
//     }
// })
//     return userId
// }

export async function getUserInfo(email){
    const doc = await fb.firestore().collection('usersInfo').doc(email).get();
    if(doc.exists){
        return doc.data();
    }else{
        return {user:[]};
    }
}
