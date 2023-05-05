// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyAzc0dkFkik719e2RDwUSC6V2iQ1ylZwJI",

    authDomain: "student-jobs-web-site.firebaseapp.com",
  
    databaseURL: "https://student-jobs-web-site-default-rtdb.europe-west1.firebasedatabase.app",
  
    projectId: "student-jobs-web-site",
  
    storageBucket: "student-jobs-web-site.appspot.com",
  
    messagingSenderId: "135158561309",
  
    appId: "1:135158561309:web:a82b2536b17d859453a4f4",
  
    measurementId: "G-XZP5HT7TT6"
  

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);