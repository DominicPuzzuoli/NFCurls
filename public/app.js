import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/app';
import 'firebase/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyBYvjl_09gdM8dq1Uh__qjAERKDcPsyOAk",
    authDomain: "nfcurls.firebaseapp.com",
    databaseURL: "https://nfcurls-default-rtdb.firebaseio.com",
    projectId: "nfcurls",
    storageBucket: "nfcurls.appspot.com",
    messagingSenderId: "48180444980",
    appId: "1:48180444980:web:682281cf5debcb7811ef61",
    measurementId: "G-T2CF60NQPB"
  };
  

  firebase.initializeApp({
    apiKey: "AIzaSyBYvjl_09gdM8dq1Uh__qjAERKDcPsyOAk",
    authDomain: "nfcurls.firebaseapp.com",
    projectId: "nfcurls"
  })
  var db = firebase.firestore();

  db.collection('users').get().then(snapshot => {
      console.log("TEST");
  })
