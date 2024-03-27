import {fb} from "../config/fireBaseConfig";
import 'firebase/compat/auth';





export function logOut(){
    fb.auth().signOut();
}

export async function registration(email,password){
    // try{
        // await
         fb.auth().createUserWithEmailAndPassword(email,password)
        //  .then(userCredits=>console.log(userCredits.user.uid))
    // }catch (e){
        
    // }
}