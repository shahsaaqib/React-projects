import { firebaseCred } from "./firebaseCred";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: firebaseCred.FIREBASE_API_KEY,
  authDomain: firebaseCred.FIREBASE_AUTH_DOMAIN,
  projectId: firebaseCred.FIREBASE_PROJECT_ID,
  storageBucket: firebaseCred.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: firebaseCred.FIREBASE_MESSAGING_SENDER_ID,
  appId: firebaseCred.FIREBASE_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
