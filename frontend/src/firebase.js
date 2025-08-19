// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "taskmanager-e6ea5.firebaseapp.com",
  projectId: "taskmanager-e6ea5",
  storageBucket: "task-manager-c9dda.appspot.com",
  messagingSenderId: "587939462229",
  appId: "1:587939462229:web:15f42600d70c7ce99e8f53",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
