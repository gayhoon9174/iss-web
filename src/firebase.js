// import Vue from 'vue'
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDqCGYndhu689UKmsvuiZvIv-OOj5Wvna8",
    authDomain: "newproject-4a333.firebaseapp.com",
    projectId: "newproject-4a333",
    storageBucket: "newproject-4a333.appspot.com",
    messagingSenderId: "946499293401",
    appId: "1:946499293401:web:f305dd073cd387b279aec8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().collection('test').add({ test: 'aaa' })
    .then(r => console.log(r))
    .catch(e => console.error(e))