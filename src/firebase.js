import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDYV5Jp2ekt8bq1zOyyfYTY3JchWZaWE7A",
    authDomain: "kui-chat-app.firebaseapp.com",
    projectId: "kui-chat-app",
    storageBucket: "kui-chat-app.appspot.com",
    messagingSenderId: "227329977772",
    appId: "1:227329977772:web:ede338ecec73c245a75e09",
    measurementId: "G-QGBXV8TCNH"
}).auth();