import firebase from "firebase/compat/app";
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAIMTkbkRpp4kSLznDFUAWiRhR4yq8uh7g",
    authDomain: "cleanit-fire-base.firebaseapp.com",
    projectId: "cleanit-fire-base",
    storageBucket: "cleanit-fire-base.appspot.com",
    messagingSenderId: "454660071618",
    appId: "1:454660071618:web:5aee65fbb83934b13b5b5b"
};


export const fb = firebase.initializeApp(firebaseConfig);
export const storage = fb.storage();