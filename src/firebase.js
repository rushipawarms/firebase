// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3Lq_QU4RXANviTS0ggChBVZNZ7553U78",
  authDomain: "social-media0-0.firebaseapp.com",
  projectId: "social-media0-0",
  storageBucket: "social-media0-0.appspot.com",
  messagingSenderId: "121876286159",
  appId: "1:121876286159:web:5e312735921d7ba72f05ba"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);