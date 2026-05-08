import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCqoLVxdonXtEh2bEVCxEN2TuwrRoGtHzs",
  authDomain: "vina-lavite.firebaseapp.com",
  projectId: "vina-lavite",
  storageBucket: "vina-lavite.firebasestorage.app",
  messagingSenderId: "491683665392",
  appId: "1:491683665392:web:e72ec14eadc40df576f935",
  measurementId: "G-HXPPD32GPD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
