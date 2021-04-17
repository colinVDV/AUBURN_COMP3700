//-------------------------------------------------------------
// Firebase config for the user database
//-------------------------------------------------------------
import firebase from 'firebase';


  var firebaseConfig = {
    apiKey: "AIzaSyB0rd30fv370U-4vEfxpbibd2SzeypyuGE",
    authDomain: "x-tracker-7db91.firebaseapp.com",
    projectId: "x-tracker-7db91",
    storageBucket: "x-tracker-7db91.appspot.com",
    messagingSenderId: "417340135373",
    appId: "1:417340135373:web:cc9c39caf3f38d8feb9684",
    measurementId: "G-N4JBVR9NP9"
  };


  // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  export default fire;
