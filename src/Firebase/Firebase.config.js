// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBycBHcTn0XKZnjNFsIBiJWxzAEefqZ0xA",
  authDomain: "genius-car-10d2b.firebaseapp.com",
  projectId: "genius-car-10d2b",
  storageBucket: "genius-car-10d2b.appspot.com",
  messagingSenderId: "398956136643",
  appId: "1:398956136643:web:1256ec65a802fb60adfa76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;