import {fb} from "../config/fireBaseConfig";
import 'firebase/compat/auth';


export async function login(email,password){
    try{
        const response = await fb.auth().signInWithEmailAndPassword(email,password);
       
        
    }
    catch (error){
        
        alert('wrong.Try one more time')
    }
}


export function logOut(){
    fb.auth().signOut();
}

export async function registration(email,password){
    try{
        await fb.auth().createUserWithEmailAndPassword(email,password);
    }catch (e){
        
    }
}