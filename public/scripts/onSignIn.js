import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection, setDoc} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";

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
const app = initializeApp(firebaseConfig);

function onSignIn(googleUser)
{
    var profile=googleUser.getBasicProfile();
    $(".g-signin2").css("display","none");
    $(".data").css("display","block");
    $("#pic").attr('src',profile.getImageUrl());
    $("#email").text(profile.getEmail());

}

function signOut()
{
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function(){

        alert("User has been signed out!");

        $(".g-signin2").css("display","block");
        $(".data").css("display","none");
    })
}

const db = getFirestore(app);
const userRef = collection(db, "users")

await setDoc(doc(userRef, "SA"), {
    name: "San Francisco", state: "CA", country: "USA",
    capital: false, population: 860000,
    regions: ["west_coast", "norcal"] });
alert("alert");
