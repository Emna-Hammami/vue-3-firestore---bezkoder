import firebase from "firebase/app";
import "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAZSHi9jb8Sf_urVjmsGtIB1ML7IT968u0",
  authDomain: "bezkoder-firebase-crud.firebaseapp.com",
  projectId: "bezkoder-firebase-crud",
  storageBucket: "bezkoder-firebase-crud.appspot.com",
  messagingSenderId: "19527466488",
  appId: "1:19527466488:web:1e799ac1a75e6f3b7c6a0d",
  measurementId: "G-ZD9DFDHETY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default db;