// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ24mBtgBIQgljLLdDgDgQbnwgdc6ep-U",
  authDomain: "prepwise-e6a97.firebaseapp.com",
  projectId: "prepwise-e6a97",
  storageBucket: "prepwise-e6a97.firebasestorage.app",
  messagingSenderId: "96517945854",
  appId: "1:96517945854:web:1076ec3e705607454868af",
  measurementId: "G-RCKF4S14NF",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
