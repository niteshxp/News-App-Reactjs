// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHuBrXxnGi8GaLHaw8wtC5IGC7CDOm-Cs",
    authDomain: "newsapp-8ff4f.firebaseapp.com",
    projectId: "newsapp-8ff4f",
    storageBucket: "newsapp-8ff4f.appspot.com",
    messagingSenderId: "229972369121",
    appId: "1:229972369121:web:71ba1b04c13a6be244a1a0",
    measurementId: "G-1VRF70HBEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();