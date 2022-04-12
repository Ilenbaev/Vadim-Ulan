// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO8lFP7CR2PrqTIY9Jsd0ihEXojDFu9FA",
  authDomain: "hackaton-ulan-vadim.firebaseapp.com",
  projectId: "hackaton-ulan-vadim",
  storageBucket: "hackaton-ulan-vadim.appspot.com",
  messagingSenderId: "969002478178",
  appId: "1:969002478178:web:5ee1839ae5e17206907f3b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
