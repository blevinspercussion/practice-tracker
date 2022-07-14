import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAcPQMmnsQxGL9RRSbyGo2uES9RVwe0_5M",
    authDomain: "practice-tracker-46ce6.firebaseapp.com",
    projectId: "practice-tracker-46ce6",
    storageBucket: "practice-tracker-46ce6.appspot.com",
    messagingSenderId: "855427004645",
    appId: "1:855427004645:web:b50f31282a325cad76bc0c"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

  