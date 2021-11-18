import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
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

// Get a list of users from your database
async function getUsers(db) {
  const userCol = collection(db, 'users');
  const userSnapshot = await getDocs(userCol);
  const userList = userSnapshot.docs.map(doc => doc.data());
  return userList;
}
alert("TEST")
const dbRef = ref(getDatabase());
/*
var refDb = firebase.database().ref("users");

dbRef.on("value", function(snapshot) {
    var childData = snapshot.val();
    var key = Object.keys(childData)[0];    //this will return 1st key.
    console.log(childData[key].id);
});

get(child(dbRef, `users/${testUser}`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
*/
