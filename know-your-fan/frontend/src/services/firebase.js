import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Substitua abaixo pelo seu config gerado no console Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBa-t7Bn0mFg6V56Wh8TWcTadQJrO9rxbA",
    authDomain: "furia-know-your-fan.firebaseapp.com",
    projectId: "furia-know-your-fan",
    storageBucket: "furia-know-your-fan.firebasestorage.app",
    messagingSenderId: "361852443119",
    appId: "1:361852443119:web:0a971cbbcd776a60c6fe1a",
    measurementId: "G-85CLX48YXE"
  };

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
