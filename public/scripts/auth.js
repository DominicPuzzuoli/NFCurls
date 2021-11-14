//signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'];

  //sign up the useer
  auth.createUserWithEmailAndPassword(email, password).then(cred =>{
    console.log(cred)
  })

  })
  var provider = new firebase.auth.GoogleAuthProvider();

  function googleSignin() {
     firebase.auth()

     .signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;

        console.log(token)
        console.log(user)
     }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(error.code)
        console.log(error.message)
     });
  }
