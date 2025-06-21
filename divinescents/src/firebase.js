// src/firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2wTc4xqeC_pzd36kGoEcVUIQSnJn0EVY",
  authDomain: "divinescents-f27ed.firebaseapp.com",
  projectId: "divinescents-f27ed",
  storageBucket: "divinescents-f27ed.firebasestorage.app",
  messagingSenderId: "839079874536",
  appId: "1:839079874536:web:cd71ba44ed543236339e5d",
  measurementId: "G-G0TF74B1NN"
};

// Initialize Firebase
const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();



