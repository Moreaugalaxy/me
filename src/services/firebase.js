// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDlu8egQrDS0QwsELKTAtN0GZatQPmHzRI",
    authDomain: "sxtxhuman3-1.firebaseapp.com",
    projectId: "sxtxhuman3-1",
    storageBucket: "sxtxhuman3-1.firebasestorage.app",
    messagingSenderId: "584149069898",
    appId: "1:584149069898:web:32ccac2af223f217ec76b3",
    measurementId: "G-SSNSVY4WL9"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// 서비스 export
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);