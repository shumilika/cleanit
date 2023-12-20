import {fb} from "../config/fireBaseConfig";
import 'firebase/compat/firestore';
import firebase from "firebase/compat/app";

export async function addRole(role,name,email,photo){

    const ref = await fb.firestore().collection('usersInfo').doc(`${email}`);
    const doc = await ref.get();
    if(doc.exists){
        await ref.update({
            user:firebase.firestore.FieldValue.arrayUnion({
                role,
                name,
                photo

            })
        })
    }else{
        await ref.set({user: [{role,name,photo}]})
    }
}


// export async function addAvatar(photo,email){

//     const ref = await fb.firestore().collection('usersInfo').doc(email);
//     const doc = await ref.get();
//     if(doc.exists){


//         await ref.update({
//             user:firebase.firestore.FieldValue
//                 .arrayUnion({
//                 photo
//             })
//         }, {merge: true})
//     }

// }


export async function getUserInfo(email){
    const ref = fb.firestore().collection('usersInfo').doc(email);
    const doc = await ref.get();
    if(doc.exists){
        return doc.data();
    }else{
        return {user:[]};
    }
}
