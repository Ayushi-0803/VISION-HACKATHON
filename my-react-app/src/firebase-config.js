import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDBfpg7m_mua3Ey8dBcfAOs0TIPx7K1exI",
  authDomain: "react-hotelmanagement.firebaseapp.com",
  projectId: "react-hotelmanagement",
  storageBucket: "react-hotelmanagement.appspot.com",
  messagingSenderId: "414966392773",
  appId: "1:414966392773:web:c73caef5e2ad3e17568dac",
  measurementId: "G-92EF2S16HG",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth=getAuth();
export{auth};

