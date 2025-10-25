// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV3HXK6yyeHpKFa5djSPc6qnU3KqG2SCQ",
  authDomain: "m0ckmate.firebaseapp.com",
  projectId: "m0ckmate",
  storageBucket: "m0ckmate.firebasestorage.app",
  messagingSenderId: "286905558205",
  appId: "1:286905558205:web:0351743da59427dc2e43d4",
  measurementId: "G-2N1FT252F7"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);