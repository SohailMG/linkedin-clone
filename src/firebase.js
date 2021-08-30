// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore/lite';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0-a4kkzS8hhYt--tGXlW57GF7pOk63lg",
  authDomain: "linkedin-clone-f6371.firebaseapp.com",
  projectId: "linkedin-clone-f6371",
  storageBucket: "linkedin-clone-f6371.appspot.com",
  messagingSenderId: "518052344145",
  appId: "1:518052344145:web:43d49a8dca70f33d782370"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore()
const auth = firebase.auth()

export {db , auth}
