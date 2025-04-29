import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Substitua abaixo pelo seu config gerado no console Firebase
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "furia-know-your-fan.firebaseapp.com",
    projectId: "furia-know-your-fan",
    storageBucket: "furia-know-your-fan.appspot.com",
    messagingSenderId: "XXXXXXXXXXXX",
    appId: "1:XXXXXXXXXXXX:web:XXXXXXXXXXXXX"
  };
  
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
