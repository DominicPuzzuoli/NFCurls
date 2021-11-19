import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection, setDoc} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const docRef = doc(db, "users", "uid");


const citiesRef = collection(db, "cities");
await setDoc(doc(citiesRef, "SF"), {
    name: "San Francisco", state: "CA", country: "USA",
    capital: false, population: 860000,
    regions: ["west_coast", "norcal"] });
