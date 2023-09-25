// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfsxM5yKBpeejouZR7tRb5oHNWjFa8SpA",
  authDomain: "have-yum.firebaseapp.com",
  projectId: "have-yum",
  storageBucket: "have-yum.appspot.com",
  messagingSenderId: "670850656841",
  appId: "1:670850656841:web:643a9a6155286db076ed98",
  measurementId: "G-VRWG83M6F3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
