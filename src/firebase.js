import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAHrrB7TFpkQQC1iWBygjLJWc8rcyu-4nU",
    authDomain: "oddaj-rzeczy-83f56.firebaseapp.com",
    projectId: "oddaj-rzeczy-83f56",
    storageBucket: "oddaj-rzeczy-83f56.appspot.com",
    messagingSenderId: "95943996609",
    appId: "1:95943996609:web:b2aaf83226672a8e05d040",
    measurementId: "G-RB6P3B1Z65"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);