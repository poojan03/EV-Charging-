// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBF9olez9pXC5tPuG1EM_pdBY5K323sXA",
  authDomain: "ev-charging-station-3876a.firebaseapp.com",
  projectId: "ev-charging-station-3876a",
  storageBucket: "ev-charging-station-3876a.appspot.com",
  messagingSenderId: "465342593381",
  appId: "1:465342593381:web:0eab21c7842de3a649098c",
  measurementId: "G-8G9HZV8X01"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
