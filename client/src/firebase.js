// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-website-46875.firebaseapp.com",
  projectId: "real-estate-website-46875",
  storageBucket: "real-estate-website-46875.firebasestorage.app",
  messagingSenderId: "1086195051176",
  appId: "1:1086195051176:web:7973cfca6e1c805422709d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);