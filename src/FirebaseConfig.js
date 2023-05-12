import { initializeApp } from "firebase/app";
import {  } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3wtpAUQR2nciMeiOrHdsfgGRCNYs_q2s",
  authDomain: "expense-1e679.firebaseapp.com",
  projectId: "expense-1e679",
  storageBucket: "expense-1e679.appspot.com",
  messagingSenderId: "768903734755",
  appId: "1:768903734755:web:07027c719651756f7facd6",
  measurementId: "G-S48267DX3B"
};


const app = initializeApp(firebaseConfig);
const fireDb = getFirestore (app);

export {fireDb};
export {app};