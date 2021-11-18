import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
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
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
/*
// Get a list of users from your database
async function getUsers(db) {
  const userCol = collection(db, 'users');
  const userSnapshot = await getDocs(userCol);
  const userList = userSnapshot.docs.map(doc => doc.data());
  return userList;
}
console.log(getUsers(db));
alert("TEST")
const dbRef = ref(getDatabase());
*/
