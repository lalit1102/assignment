import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCl88K0afu6029l9wcFj7tOHMfnk7s9ILQ",
  authDomain: "hotel-managment-60c2f.firebaseapp.com",
  projectId: "hotel-managment-60c2f",
  storageBucket: "hotel-managment-60c2f.firebasestorage.app",
  messagingSenderId: "687253870805",
  appId: "1:687253870805:web:92c6b5e27557384b402a5c",
  measurementId: "G-PCEFBEMLQ8"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage}
