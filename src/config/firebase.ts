
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyCi1SWzyAtDahmFZNi8ZHTzT_OMjI1UBWU",
  authDomain: "devsocials-444b8.firebaseapp.com",
  projectId: "devsocials-444b8",
  storageBucket: "devsocials-444b8.appspot.com",
  messagingSenderId: "738511331741",
  appId: "1:738511331741:web:15063ed9b5086dce09cf74"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()