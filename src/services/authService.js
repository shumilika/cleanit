import {fb} from "../config/fireBaseConfig";
import 'firebase/compat/auth';

export async function login(email,password){
    try{
        const response = await fb.auth().signInWithEmailAndPassword(email,password);
        console.log(response.user);
    }catch (error){
        console.log(error.message)
        alert('wrong.Try one more time')
    }
}

export function logout(){
    fb.auth().signOut();
}

export async function registration(email,password){
    try{
        const response = await fb.auth().createUserWithEmailAndPassword(email,password);
        console.log(response)
    }catch (e){
        console.log(e.message)
    }
}