import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js'
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js'
import { getFirestore} from 'https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js'
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
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBYvjl_09gdM8dq1Uh__qjAERKDcPsyOAk",
  authDomain: "nfcurls.firebaseapp.com",
  databaseURL: "https://nfcurls-default-rtdb.firebaseio.com",
  projectId: "nfcurls",
  storageBucket: "nfcurls.appspot.com",
  messagingSenderId: "48180444980",
  appId: "1:48180444980:web:682281cf5debcb7811ef61",
  measurementId: "G-T2CF60NQPB"
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
