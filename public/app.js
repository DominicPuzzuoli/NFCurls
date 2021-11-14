import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
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
  const db = getFirestore();

  db.colleciton('users').get().then(snapshot => {
      console.log("TEST");
  })
