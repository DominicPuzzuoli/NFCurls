import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js'
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js'
import { getFirestore} from 'https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js'
/*
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

*/
var firebaseConfig ={
  apiKey: "AIzaSyBYvjl_09gdM8dq1Uh__qjAERKDcPsyOAk",
  authDomain: "nfcurls.firebaseapp.com",
  databaseURL: "https://nfcurls-default-rtdb.firebaseio.com",
  projectId: "nfcurls",
  storageBucket: "nfcurls.appspot.com",
  messagingSenderId: "48180444980",
  appId: "1:48180444980:web:682281cf5debcb7811ef61",
  measurementId: "G-T2CF60NQPB"
};
firebase.initializeApp(firebaseConfig);
document.getElementById('LogoutScreen').style.display="none"


document.getElementById('login').addEventListener('click', GoogleLogin)
document.getElementById('logout').addEventListener('click', LogoutUser)

let provider = new firebase.auth.GoogleAuthProvider()

function GoogleLogin(){
  console.log('Login Btn Call')
  firebase.auth().signInWithPopup(provider).then(res=>{
    console.log(res.user)
    document.getElementById('LoginScreen').style.display="none"
    document.getElementById('LogoutScreen').style.display="block"
    showUserDetails(res.user)
  }).catch(e=>{
    console.log(e)
  })
}
function showUserDetails(user){
      document.getElementById('userDetails').innerHTML = `
        <img src="${user.photoURL}" style="width:40%">
        <p> ${user.displayName}</p>
      `
    }

    function checkAuthState(){
      firebase.auth().onAuthStateChanged(user=>{
        if(user){
          document.getElementById('LoginScreen').style.display="none"
          document.getElementById('LogoutScreen').style.display="block"
          showUserDetails(user)
        }else{

        }
      })
    }

function LogoutUser(){
  console.log('Logout Btn Call')
  firebase.auth().signOut().then(()=>{
    document.getElementById('LoginScreen').style.display="block"
    document.getElementById('LogoutScreen').style.display="none"

  }).catch(e=>{

    console.log(e)
  })
}
  checkAuthState()
