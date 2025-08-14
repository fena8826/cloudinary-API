
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC_jedLRb6eWvPYvdYMi1hmj5kYEhfUtLY",
  authDomain: "blinkit-api.firebaseapp.com",
  projectId: "blinkit-api",
  storageBucket: "blinkit-api.firebasestorage.app",
  messagingSenderId: "649875412356",
  appId: "1:649875412356:web:4846865b2d792c4fdff9d1",
  measurementId: "G-3Z8B43G3PM"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);