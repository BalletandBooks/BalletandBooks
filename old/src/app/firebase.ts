// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgOupJ--1zVzopmLJ1Xg1JJFlhZD8_vio",
  authDomain: "ballet-books.firebaseapp.com",
  projectId: "ballet-books",
  storageBucket: "ballet-books.appspot.com",
  messagingSenderId: "216574663801",
  appId: "1:216574663801:web:d9f26521717354ea4e48a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export { app, auth, db }

