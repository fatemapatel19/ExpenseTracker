import { initializeApp } from "firebase/app";
import {  } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClepOaGsnIet8-MwzGc352dcfko2y5CqY",
  authDomain: "expensetracker-962d6.firebaseapp.com",
  projectId: "expensetracker-962d6",
  storageBucket: "expensetracker-962d6.appspot.com",
  messagingSenderId: "445461520758",
  appId: "1:445461520758:web:1519646b1f518404aa9a57",
  measurementId: "G-B8LEYFLS99"
};


const app = initializeApp(firebaseConfig);
const fireDb = getFirestore (app);

export {fireDb};
export {app};