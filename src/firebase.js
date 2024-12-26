// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0JbTX5zejR-Y3FGWlPBL1DhCY7-LTFmM",
  authDomain: "movieverse-482ad.firebaseapp.com",
  projectId: "movieverse-482ad",
  storageBucket: "movieverse-482ad.appspot.com",
  messagingSenderId: "741876335692",
  appId: "1:741876335692:web:d36d41e510525fa9b0e0e9",
  measurementId: "G-ZZGQ83PG7S"
};

// Initialize Firebase

// const analytics = getAnalytics(app);
export const app = firebase.initializeApp(firebaseConfig);
export const db=firebase.firestore();
export const auth=firebase.auth();



//other way to export Collectively NOte: Remove export from each const if want to export that variable
//export {auth,app};
//export default db;