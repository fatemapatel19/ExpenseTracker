import { initializeApp } from "firebase/app";
import {  } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyAbiADiyQf7EeD-XfwKQboDYEOq7A4ySJI",
  authDomain: "expenso-74dba.firebaseapp.com",
  projectId: "expenso-74dba",
  storageBucket: "expenso-74dba.appspot.com",
  messagingSenderId: "522844472156",
  appId: "1:522844472156:web:b174105e382a85ccc93799",
  measurementId: "G-MCDC01RW7M"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyC3wtpAUQR2nciMeiOrHdsfgGRCNYs_q2s",
//   authDomain: "expense-1e679.firebaseapp.com",
//   projectId: "expense-1e679",
//   storageBucket: "expense-1e679.appspot.com",
//   messagingSenderId: "768903734755",
//   appId: "1:768903734755:web:07027c719651756f7facd6",
//   measurementId: "G-S48267DX3B"
// };


const app = initializeApp(firebaseConfig);
const fireDb = getFirestore (app);

export {fireDb};
export {app};


