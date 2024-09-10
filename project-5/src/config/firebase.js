// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA6UNHPMCy0K-G8_zFyqI84nK82T-smXo",
  authDomain: "vite-contact-b16c9.firebaseapp.com",
  projectId: "vite-contact-b16c9",
  storageBucket: "vite-contact-b16c9.appspot.com",
  messagingSenderId: "717988637921",
  appId: "1:717988637921:web:e2b56390c4aecf1521dba0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
