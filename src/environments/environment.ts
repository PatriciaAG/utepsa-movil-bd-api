// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8l8hn6Tf6HZhTXgBvPylGkn9YDqweKdE",
  authDomain: "practica-a593b.firebaseapp.com",
  projectId: "practica-a593b",
  storageBucket: "practica-a593b.firebasestorage.app",
  messagingSenderId: "736560464987",
  appId: "1:736560464987:web:7438eaca40e88b4ee76b7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyB8l8hn6Tf6HZhTXgBvPylGkn9YDqweKdE",
    authDomain: "practica-a593b.firebaseapp.com",
    projectId: "practica-a593b",
    storageBucket: "practica-a593b.firebasestorage.app",
    messagingSenderId: "736560464987",
    appId: "1:736560464987:web:7438eaca40e88b4ee76b7e"
  }
};