// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5yQ4W7pbRUwWwh7Ec80yGHqgRsUbL62s",
    authDomain: "my-next-app-febf9.firebaseapp.com",
    projectId: "my-next-app-febf9",
    storageBucket: "my-next-app-febf9.appspot.com",
    messagingSenderId: "945042379842",
    appId: "1:945042379842:web:ca24c377928ed6348949db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app